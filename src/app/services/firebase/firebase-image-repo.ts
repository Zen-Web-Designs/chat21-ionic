import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

// services
import { ImageRepoService } from '../image-repo.service';

@Injectable({ providedIn: 'root' })

export class FirebaseImageRepoService extends ImageRepoService {

    FIREBASESTORAGE_BASE_URL_IMAGE = environment.FIREBASESTORAGE_BASE_URL_IMAGE;
    urlStorageBucket = environment.firebaseConfig.storageBucket + '/o/profiles%2F';
    constructor() {
        super();
    }

    /**
     *
     */
    public getImageThumb(uid: string): string {
        const imageurl = this.FIREBASESTORAGE_BASE_URL_IMAGE + this.urlStorageBucket + uid + '%2Fthumb_photo.jpg?alt=media';
        return imageurl;
    }
}
