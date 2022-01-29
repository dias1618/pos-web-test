import { AuthRepository } from "./auth.repository";
import { AmazonRepositoryFactory } from "./factories/amazon-repository.factory";
import { FirebaseRepositoryFactory } from "./factories/firebase-repository.factory";
import { MongoDbRepositoryFactory } from "./factories/mongodb-repository.factory";
import { RepositoryFactory } from "./factories/repository.factory";
import { Repository } from "./repository";
import { StorageRepository } from "./storage-repository";
import { TreatErrorRepository } from "./treat-error.repository";

export class GenerateFactory{

    static generateFactory:GenerateFactory;

    static getInstance():GenerateFactory{
        if(!GenerateFactory.generateFactory){
            GenerateFactory.generateFactory = new GenerateFactory();
        }
        return GenerateFactory.generateFactory;
    }

    private repositoryFactory:RepositoryFactory;

    constructor(){
        this.repositoryFactory = new FirebaseRepositoryFactory();
    }

    repository():Repository{
        return this.repositoryFactory.repository();
    }

    authRepository():AuthRepository{
        return this.repositoryFactory.authRepository();
    }
    
    treatErrorRepository():TreatErrorRepository{
        return this.repositoryFactory.treatErrorRepository();
    }
    
    storageRepository():StorageRepository{
        return this.repositoryFactory.storageRepository();
    }
}