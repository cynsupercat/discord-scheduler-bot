import { Firestore } from "@google-cloud/firestore";
import { IFirestoreClient } from './interfaces';
import { injectable } from "inversify";
import * as config from '../config/google-credentials.json'

@injectable()
export default class FirestoreClient implements IFirestoreClient {

    readonly db: Firestore;

    constructor() {
        this.db = new Firestore({
            projectId: config.project_id,
            credentials: {
                client_email: config.client_email,
                private_key: config.private_key
            }
        });
    }
}


