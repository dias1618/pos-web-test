import { AuthRepository } from "../auth.repository";
import { Repository } from "../repository";
import { StorageRepository } from "../storage-repository";
import { TreatErrorRepository } from "../treat-error.repository";
import { FirebaseAuthRepository } from "../firebase/firebase.auth.repository";
import { FirebaseRepository } from "../firebase/firebase.repository";
import { FirebaseStorageRepository } from "../firebase/firebase.storage-repository";
import { FirebaseTreatErrorRepository } from "../firebase/firebase.treat-error.repository";
import { RepositoryFactory } from "./repository.factory";

export class FirebaseRepositoryFactory implements RepositoryFactory{

    private _repository:Repository;
    private _authRepository:AuthRepository;
    private _treatErrorRepository:TreatErrorRepository;
    private _storageRepository:StorageRepository;

    constructor(){
        this._repository = new FirebaseRepository();
        this._authRepository = new FirebaseAuthRepository();
        this._treatErrorRepository = new FirebaseTreatErrorRepository();
        this._storageRepository = new FirebaseStorageRepository();
    }

    repository():Repository{
        return this._repository;
    }

    authRepository():AuthRepository{
        return this._authRepository;
    }
    
    treatErrorRepository():TreatErrorRepository{
        return this._treatErrorRepository;
    }
    
    storageRepository():StorageRepository{
        return this._storageRepository;
    }
}