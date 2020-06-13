import { Firestore } from "@google-cloud/firestore";

export interface IFirestoreClient {
    readonly db: Firestore;
}