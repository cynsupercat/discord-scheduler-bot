import { injectable, inject } from "inversify";
import { IFirestoreClient } from '../interfaces';
import Group from "../../domain/entities/group";
import { INFRASTRUCTURE_TYPES } from '../types';
import { IGroupRepository } from '../../application/interfaces';

@injectable()
export default class GroupRepository implements IGroupRepository {
    
    private readonly _client: IFirestoreClient;
    private readonly _collection = 'groups';

    constructor(@inject(INFRASTRUCTURE_TYPES.Firestore) client: IFirestoreClient) {
        this._client = client;
    }

    async addGroup(group: Group): Promise<void> {
        // Firestore doesn't support custom objects. Thanks firestore.
        const jsonData = JSON.parse(JSON.stringify(group));
        const result = await this._client.db.collection(this._collection).doc(group.channelId).set(jsonData);
    }

    async getGroup(channelId: string): Promise<Group | null> {
        let doc = await this._client.db.collection(this._collection).doc(channelId).get();

        if (!doc.exists)
            return null;

        console.log(doc.data);
    }
}