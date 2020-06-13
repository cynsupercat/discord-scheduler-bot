import { Firestore } from "@google-cloud/firestore";
import { IFirestoreClient } from './interfaces';

export default class FirestoreClient implements IFirestoreClient {

    readonly db: Firestore;

    constructor() {
        this.db = new Firestore({
            projectId: 'YOUR_PROJECT_ID',
            keyFilename: '/path/to/keyfile.json',
        });
    }
}


