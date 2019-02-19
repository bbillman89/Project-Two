USE patientAllergy_db;

-- Values for testing purposes
INSERT INTO userLogins (userName, password, createdAt, updatedAt)
VALUES ('bbillman', 'password11', '2019-02-11 12:11:22.111', '2019-02-11 12:11:22.111');

INSERT INTO Patients (first_name, last_name, address, sex, birth, phone, createdAt, updatedAt)
VALUES ('brett', 'billman', '1234 Street St.', 'male', '1989-02-18', '216-222-2222', '2019-02-11 12:11:22.111', '2019-02-11 12:11:22.111');

INSERT INTO dilutions (asp, rhodo, helm, penic, mucor, rhizo, pull, alt, horm, cat, dog, dPter, stFar, bermSmut, johnsSmut, epic, grass, pig, plant, rag, tree, oak, createdAt, updatedAt)
VALUES (1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,'2019-02-11 12:11:22.111', '2019-02-11 12:11:22.111');

INSERT INTO antigens (asp, rhodo, helm, penic, mucor, rhizo, pull, alt, horm, cat, dog, dPter, stFar, bermSmut, johnsSmut, epic, grass, pig, plant, rag, tree, oak, createdAt, updatedAt)
VALUES (1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,'2019-02-11 12:11:22.111', '2019-02-11 12:11:22.111');