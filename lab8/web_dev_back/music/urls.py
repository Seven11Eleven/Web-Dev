from django.urls import path
from views import (LoginView, LogoutView, ArtistListCreateView, ArtistDetailView,
                   AlbumListCreateView, AlbumDetailView, UserProfileView)

urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),

    path('artists/', ArtistListCreateView.as_view(), name='artist-list'),
    path('artists/<int:pk>/', ArtistDetailView.as_view(), name='artist-detail'),

    path('albums/', AlbumListCreateView.as_view(), name='album-list'),
    path('albums/<int:pk>/', AlbumDetailView.as_view(), name='album-detail'),

    path('profile/', UserProfileView.as_view(), name='user-profile'),
]