USE patientAllergy_db;

-- Values for testing purposes
INSERT INTO userLogins (userName, password, createdAt, updatedAt)
VALUES ('bbillman', 'password11', '2019-20-11 12:11:22.111', '2019-20-11 12:11:22.111');

INSERT INTO Patients (patient_id, first_name, last_name, address, sex, birth, phone, createdAt, updatedAt)
VALUES ('sara', 'loveman', '14 Street St.', 'F', '1989-20-18', '216-222-2222', '2019-20-11 12:11:22.111', '2019-20-11 12:11:22.111');

INSERT INTO dilutions (asp, rhodo, helm, penic, mucor, rhizo, pull, alt, horm, cat, dog, dPter, stFar, bermSmut, johnsSmut, epic, grass, pig, plant, rag, tree, oak, notes, createdAt, updatedAt)
VALUES (1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,1,'2019-02-11 12:11:22.111', '2019-02-11 12:11:22.111');

INSERT INTO antigens (asp, rhodo, helm, penic, mucor, rhizo, pull, alt, horm, cat, dog, dPter, stFar, bermSmut, johnsSmut, epic, grass, pig, plant, rag, tree, oak, notes, createdAt, updatedAt)
VALUES (1,2,3,4,5,6,7,8,9,10,11,12,1,4,5,6,7,8,9,2,1,2,'2019-20-11 12:11:22.111', '2019-20-11 12:11:22.111');