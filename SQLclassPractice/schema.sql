CREATE if not exists DATABASE fakeusers;
USE fakeusers;

CREATE TABLE fakeInfo(
    id VARCHAR(50) PRIMARY KEY,
    username  VARCHAR(50) UNIQUE,
    email  VARCHAR(50) UNIQUE NOT NULL,
    password  VARCHAR(50) UNIQUE
)
