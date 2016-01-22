-- Create The Table
CREATE TABLE scores (
  name character varying NOT NULL,
  score integer,
  id serial NOT NULL,  
  CONSTRAINT scores_pkey PRIMARY KEY (id)
)