-- Table: unh_it.student_career_info

-- DROP TABLE unh_it.student_career_info;

CREATE TABLE unh_it.student_career_info
(
    id integer NOT NULL DEFAULT nextval('unh_it.student_career_info_id_seq'::regclass),
    first_name text COLLATE pg_catalog."default",
    last_name text COLLATE pg_catalog."default",
    graduation_year integer,
    major text COLLATE pg_catalog."default",
    email text COLLATE pg_catalog."default",
    phone text COLLATE pg_catalog."default",
    organization_name text COLLATE pg_catalog."default",
    role text COLLATE pg_catalog."default",
    city text COLLATE pg_catalog."default",
    state text COLLATE pg_catalog."default",
    date_hired text COLLATE pg_catalog."default",
    linkedin_url text COLLATE pg_catalog."default",
    latitude text COLLATE pg_catalog."default",
    longitude text COLLATE pg_catalog."default",
    CONSTRAINT student_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE unh_it.student_career_info
    OWNER to postgres;
-- Index: student_id_uindex

-- DROP INDEX unh_it.student_id_uindex;

CREATE UNIQUE INDEX student_id_uindex
    ON unh_it.student_career_info USING btree
    (id ASC NULLS LAST)
    TABLESPACE pg_default;