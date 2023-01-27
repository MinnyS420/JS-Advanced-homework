// There is a JSON file with students. Make a call to the file and get the following data from it:

// All students with an average grade higher than 3
// All female student names with an average grade of 5
// All male student full names who live in Skopje and are over 18 years old
// The average grades of all female students over the age of 24
// All male students with a name starting with B and average grade over 2

// Use higher order functions to find the answers Link: https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json

const url = 'https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json';

let getData =
    fetch(url)
        .then(data => data.json())
        .then(data => {
            for (let element of data) {
                // console.log(element);
            };
            // console.log(data);

            function filterGrade() {
                const getStudentsAcerageGradesHigherThen3 = data
                    .filter((s) => s.averageGrade > 3)

                //Ima for loop so site studenti 
                for (let element of getStudentsAcerageGradesHigherThen3) {
                    console.log(element);
                };

                //Ima clg so array of sithe studenti
                console.log(`All students with an average grade higher than 3:`, getStudentsAcerageGradesHigherThen3);
            };


            function femaleFilterGrade() {
                const getStudentsNamesAcerageGradesHigherThen5 = data

                    //All female student names with an average grade of 5 in array
                    .filter((s) => s.gender === "Female" && s.averageGrade === 5)
                    .map((s) => s.firstName)
                console.log(`All female student names with an average grade of 5:`, getStudentsNamesAcerageGradesHigherThen5);

                //All female student names with an average grade of 5 as string
                // .map((s)=>console.log(`Student ${s.firstName}is with an average grade of 5.`));
            };

            function filterMaleSudentsOver18() {
                const allMaleStudentsFromSkopjeOver18 = data
                    .filter((s) => s.gender === "Male" && s.age > 18 && s.city === "Skopje")

                    //All male student full names who live in Skopje and are over 18 years old in array
                    // .map((s)=>s.firstName + " " + s.lastName)
                    // console.log(`All male student full names who live in Skopje and are over 18 years old:`,allMaleStudentsFromSkopjeOver18);

                    //All male student full names who live in Skopje and are over 18 years old as string
                    .map((s) => console.log(`Student ${s.firstName} ${s.lastName} live in Skopje and are over 18 years old.`));
            };

            function acerageGradesOfFemaleStud() {
                const averageGradesOfFemaleStudentsOver24 = data
                    .filter((s) => s.gender === "Female" && s.age > 24)
                    .map((s) => s.averageGrade)
                console.log(averageGradesOfFemaleStudentsOver24);
            }

            function filterMaleStudentsWithLetterB() {
                const maleStudentsWithLetterBAndAverageGradeOver2 = data
                    .filter((s) => s.gender === "Male" && s.firstName[0] === "B" && s.averageGrade >= 2)
                console.log(`All male students with a name starting with B and average grade over 2:`, maleStudentsWithLetterBAndAverageGradeOver2);
                // .map((s)=>console.log(`${s.firstName} grade is ${s.averageGrade}`));
            }

            filterGrade();
            femaleFilterGrade();
            filterMaleSudentsOver18();
            acerageGradesOfFemaleStud();
            filterMaleStudentsWithLetterB();
        });



