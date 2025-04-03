from rest_framework import serializers
from profiles.models import Artist, Album, Track, UserProfile
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class ArtistSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=100)
    bio = serializers.CharField(allow_null=True, required=False)
    created_at = serializers.DateTimeField(read_only=True)
    updated_at = serializers.DateTimeField(read_only=True)

    def create(self, validated_data):
        return Artist.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.bio = validated_data.get('bio', instance.bio)
        instance.save()
        return instance

class TrackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Track
        fields = ['id', 'title', 'track_number', 'duration']

class AlbumSerializer(serializers.ModelSerializer):
    tracks = TrackSerializer(many=True, read_only=True)
    artist_name = serializers.CharField(source='artist.name', read_only=True)
    created_by_username = serializers.CharField(source='created_by.username', read_only=True)

    class Meta:
        model = Album
        fields = ['id', 'title', 'artist', 'artist_name', 'release_year',
                 'cover_image', 'tracks', 'created_by', 'created_by_username',
                 'created_at', 'updated_at']
        read_only_fields = ['created_by']

    def validate_release_year(self, value):
        if value < 1900 or value > 2100:
            raise serializers.ValidationError("Release year must be between 1900 and 2100")
        return value

class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    favorite_artists = ArtistSerializer(many=True, read_only=True)

    class Meta:
        model = UserProfile
        fields = ['id', 'user', 'bio', 'profile_picture', 'favorite_artists',
                 'created_at', 'updated_at']