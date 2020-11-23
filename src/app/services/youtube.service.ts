import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  private youtubeUrl = 'https://www.googleapis.com/youtube/v3';
  private apiKey = 'AIzaSyAEaW_jVlD7eK0X9F9aEaCKQjhR4gBCKY8';
  private playListId = 'UUuaPTYj15JSkETGnEseaFFg';
  private nextPageToken = '';

  constructor(private http: HttpClient) {}

  getVideos() {
    const url = `${this.youtubeUrl}/playlistItems`;

    const params = new HttpParams()
      .set('part', 'snippet')
      .set('maxResults', '12')
      .set('playlistId', this.playListId)
      .set('key', this.apiKey);

    return this.http.get(url, {
      params,
    });
  }
}