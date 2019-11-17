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
        uint state;
        string caddress;
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

    struct Claim{
        uint id;
        address claimant;
        int state;
        string file;
    }

    address public admin;
    uint public nextDiseaseId;
    uint public nextMedicalProfessionalId;
    uint public nextClientId;
    uint public nextVerifierId;
    uint public nextClaimId;

    mapping(address => Client)public clients;
    mapping(address => MedicalProfessional)public medicalProfessionals;
    mapping(address => Verifier)public verifiers;
    mapping(uint => Claim)public claims;

    event clientAdded(address, string,      string);
    event medicalProfessionalAdded(address, string);
    event verifierAdded(address, string);
    event claimCreated(uint, address, uint);

    constructor() public{
        admin = msg.sender;
        verifiers[admin] = Verifier(0, "admin", true);
        
        nextDiseaseId = 0;
        nextMedicalProfessionalId = 0;
        nextClientId = 0;
        nextVerifierId = 1;
        nextClaimId = 0;
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
    
    function addClient(address _clientAddress, string calldata _name, string calldata _caddress) external{
        clients[_clientAddress] = Client(nextClientId, _name, false, 1, _caddress);
        nextClientId++;
        emit clientAdded(_clientAddress, _name, _caddress);
    }
    
    function registerClient(address _clientAddress)external onlyVerifier(){
        clients[_clientAddress].verified = true;
        clients[_clientAddress].state = 2;
    }
    
    function createClaim(string calldata _file) external registeredClient(){
        claims[nextClaimId] = Claim(nextClaimId, msg.sender, 0, _file);
        emit claimCreated(nextClaimId, msg.sender, 0);
        nextClaimId++;
    }
    
    function checkClaim(uint id) external 
    // onlyMedicalProfessional()
    {
        require(claims[id].state == 0);
        claims[id].state = 1;
    }
    
    function rejectClaimMedical(uint id) external 
    // onlyMedicalProfessional()
    {
        require(claims[id].state == 0);
        claims[id].state = -1;
    }
    
    function approveClaim(uint id) external onlyVerifier(){
        require(claims[id].state == 1);
        claims[id].state = 2;
    }
    
    function rejectClaimVerifier(uint id) external onlyVerifier{
        require(claims[id].state == 2);
        claims[id].state = -2;
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