--test table
create table public."ProjectData" (
	ID int, 
	hotelID varchar(200),
	Name varchar(200),
	Lon varchar(200),
	Lat varchar(200),
	Formatted varchar(300),
	Stars varchar(300),
	Building varchar(200),
	City_ID varchar(200)	
)

select * from "ProjectData"

copy public."ProjectData" from 'D:\Desktop D\Semesters\Fifth Semester\Software design and architecture\Labs\dians-project\Homework 1\Data Collection\hotels.csv' 
delimiter ',' csv header;

drop table public."ProjectData"

--create hotels table
create table public."hotels"(
	ID int, 
	hotelID varchar(200),
	Name varchar(200),
	Lon varchar(200),
	Lat varchar(200),
	Formatted varchar(300),
	Stars varchar(300),
	Building varchar(200),
	City_ID varchar(200)	
)

copy public."hotels" from 'D:\Desktop D\Semesters\Fifth Semester\Software design and architecture\Labs\dians-project\Homework 1\Data Collection\hotels.csv' 
delimiter ',' csv header;

select * from "hotels"

--create municipality table
--,ID,Name,lon1,lat1,lon2,lat2
create table public."municipalities"(
	ID int, 
	municipalityID varchar(200),
	Name varchar(200),
	Lon1 varchar(200),
	Lat1 varchar(200),
	Lon2 varchar(300),
	Lat2 varchar(300)	
)

copy public."municipalities" from 'D:\Desktop D\Semesters\Fifth Semester\Software design and architecture\Labs\dians-project\Homework 1\Data Collection\municipalities.csv' 
delimiter ',' csv header;

select * from "municipalities"

