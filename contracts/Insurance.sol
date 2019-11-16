pragma solidity ^0.5.0;

contract Insurance{
    struct Disease{
        uint id;
        string name;
    }
    
    struct Client{
        uint id;
        string name;
        bool verified;
    }
    
    struct MedicalProfessional{
        uint id;
        string name;
        bool valid;
    }
    
    struct Verifier{
        uint id;
        string name;
        bool valid;
    }
    address public admin;
    
    uint public nextDiseaseId;
    uint public nextMedicalProfessionalId;
    uint public nextClientId;
    uint public nextVerifierId;
    
    mapping(address => Client) clients;
    mapping(address => MedicalProfessional) medicalProfessionals;
    mapping(address => Verifier) verifiers;
    
    event clientAdded(address, string);
    event medicalProfessionalAdded(address, string);
    event verifierAdded(address, string);
    
    constructor() public{
        admin = msg.sender;
        verifiers[admin] = Verifier(0, "admin", true);
        
        nextDiseaseId = 0;
        nextMedicalProfessionalId = 0;
        nextClientId = 0;
        nextVerifierId = 1;
    }
    
    function addVerifier(address _verifierAddress, string calldata _name) external onlyAdmin(){
        verifiers[_verifierAddress] = Verifier(nextVerifierId, _name, true);
        nextVerifierId++;
        emit verifierAdded(_verifierAddress, _name);
    }
    
    function addMedicalProfessional(address _medicalProfessional, 
        string calldata _name) external onlyVerifier(){
        medicalProfessionals[_medicalProfessional] = MedicalProfessional(nextMedicalProfessionalId, _name, true);
        nextMedicalProfessionalId++;
        emit medicalProfessionalAdded(_medicalProfessional, _name);
    }
    
    function addClient(address _clientAddress, string calldata _name) external{
        clients[_clientAddress] = Client(nextClientId, _name, false);
        nextClientId++;
        emit clientAdded(_clientAddress, _name);
    }
    
    function registerClient(address _clientAddress)external onlyVerifier(){
        clients[_clientAddress].verified = true;
    }
    
    modifier onlyAdmin(){
        require(msg.sender == admin);
        _;
    }
    
    modifier onlyVerifier(){
        require(verifiers[msg.sender].valid == true);
        _;
    }
    
    modifier onlyMedicalProfessional(){
        require(medicalProfessionals[msg.sender].valid == true, "only medical professional allowed");
        _;
    }
    
    modifier registeredClient(){
        require(clients[msg.sender].verified == true);
        _;
    }
}