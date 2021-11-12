// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
/*document.getElementById("blue").addEventListener("click", function () {
    document.getElementById("demo").innerHTML = "Hello World";
});*/
/*
const animals = [
    { name: 'Nemo', species: 'fish', class: { name: 'invertebrata' } },
    { name: 'Simba', species: 'Cat', class: { name: 'Mamalia' } },
    { name: 'Dory', species: 'fish', class: { name: 'invertebrata' } },
    { name: 'Panther', species: 'Cat', class: { name: 'Mamalia' } },
    { name: 'Budi', species: 'Cat', class: { name: 'Mamalia' } }
]
*//*Tugas 1*//*
for (var i = 0; i < animals.length; i++) {
    if (animals[i].species == "fish") {
        animals[i].class.name = "non-mamalia";     
    }
}
console.log(animals);

*//*Tugas 2*//*
const cat = [];
for (var i = 0; i < animals.length; i++) {
    if (animals[i].species == "Cat") {
        cat.push(animals[i]);
    }
}
console.log(cat);

animals.forEach(a => {
   if (a.species == 'fish') {
        a.class.name='non-mamalia'
    }
})
console.log(animals)
const cats = [];
animals.forEach(a => {
    if (a.species == 'Cat') {
        cats.push(a)
    }
})
console.log(cats)*/

/*$.ajax({
    url: "https://localhost:44326/API/Universities",
    success: function (result) {

        var university = "";
        $.each(result, function (key, val) {
            university += ` <option value="${val.id}">${val.name}</option>`;
        })

        $('#University').html(university);
    }

})*/



$.ajax({
    url: "https://pokeapi.co/api/v2/pokemon/",
    success: function (result) {
        console.log(result.results);
        var ppl = "";
        $.each(result.results, function (key, val) {
            ppl += `<tr>
                    <th scope="row">${key+1}</th>
                    <td>${val.name}</td>
                    <td>
                    <button type="button" class="btn btn-primary" onclick="detail('${val.url}')" data-toggle="modal" data-target="#exampleModal">
                      Details
                    </button>
                    </td>
                </tr>`
        });
        $('#tablePpl').html(ppl);
        
    }
})

$.ajax({
    url: "https://localhost:44326/API/Employees/Gender",

}).done((result) => {
    console.log(result);
    var options = {
        series: [],
        chart: {
            width: 380,
            type: 'pie',
        },
        labels: [],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 100
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    };
    result.map(x => {
        options.series.push(Math.round(x.value));
    });
    result.map(x => {
        var gen = '';
        if (x.gender == 0) {
            gen = 'Male'
        } else {
            gen = 'Female'
        }
        options.labels.push(gen);
    });

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
}).fail((error) => {
    console.log(error)
})

$.ajax({
    url: "https://localhost:44326/API/Employees/Role",

}).done((result) => {
    
    var options = {
        series: [],
        labels : [],
        chart: {
            type: 'donut',
        },
        responsive: [{
            breakpoint: 120,
            options: {
                chart: {
                    width: 50
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    };
    result.map(x => {
        options.series.push(Math.round(x.value));
    });
    result.map(x => {
        options.labels.push(x.role);
    });

    var chart = new ApexCharts(document.querySelector("#donutChart"), options);
    chart.render();
}).fail((error) => {
    console.log(error)
})


$.ajax({
    url: "https://localhost:44326/API/Employees/Salary",

}).done((result) => {
    console.log(result);
    var options = {
        series: [{
            data: []
        }],
        chart: {
            type: 'bar',
            height: 350
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: [],
        }
    };
    result.map(x => {
        options.series[0].data.push(Math.round(x.value));
    });
    result.map(x => {

        options.xaxis.categories.push(x.label);
    });

    var chart = new ApexCharts(document.querySelector("#barchart"), options);
    chart.render();

}).fail((error) => {
    console.log(error)
})


/*var options = {
    series: [{
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
    }],
    chart: {
        type: 'bar',
        height: 350
    },
    plotOptions: {
        bar: {
            borderRadius: 4,
            horizontal: true,
        }
    },
    dataLabels: {
        enabled: false
    },
    xaxis: {
        categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
            'United States', 'China', 'Germany'
        ],
    }
};

var chart = new ApexCharts(document.querySelector("#barchart"), options);
chart.render();*/
/*var options = {
    series: [44, 55, 13, 43, 22],
    chart: {
        width: 380,
        type: 'pie',
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
};
*/
/*var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();*/



function detail(url) {
    /*console.log(url);*/
    listSW = "";
    ability1 = "";
    tipe = "";
    no = 0;
    $.ajax({
        url: url,
        success: function (result) {     
            result.abilities.forEach(a => {
                ability1 += ` <td><b>${++no}</b>${'.'} ${a.ability.name}</td>`
            })
            result.types.forEach(a => {
                if (a.type.name == 'grass') {
                    tipe += ` <span class="badge badge-success">Grass</span>`
                }
                else if (a.type.name == 'poison') {
                    tipe += ` <span class="badge badge-secondary">Poison</span>`
                }
                else if (a.type.name == 'fire') {
                    tipe += ` <span class="badge badge-danger">Fire</span>`
                }
                else if (a.type.name == 'flying') {
                    tipe += ` <span class="badge badge-primary">Flying</span>`
                }
                else if (a.type.name == 'water') {
                    tipe += ` <span class="badge badge-info">Water</span>`
                }
                else if (a.type.name == 'bug') {
                    tipe += ` <span class="badge badge-success">Bug</span>`
                }
                else if (a.type.name == 'normal') {
                    tipe += ` <span class="badge badge-dark">Normal</span>`
                }
                else {
                    tipe += ` <span class="badge badge-dark">${a.type.name}</span>`
                }
            })
            
            listSW += `
                     
                    <div class="container-fluid">
	                    <div class="row">         
	                        <div class="col-md">
                                <div class="list-group-item" id="pokemonName">
                                    <img id="pokemon" src="${result.sprites.other.home.front_default}" >
                                    <h4>${result.name}</h4>
                                </div>     
	                            <ul class="list-group">
	                            <li class="list-group-item"><strong>Weight : </strong>${result.weight}</li>
                                <li class="list-group-item"><strong> Height : </strong>${result.height}</li>
	                            <li class="list-group-item"><strong>Ability : </strong>${ability1}</li>
                                <li class="list-group-item"><strong>Types : </strong>${tipe}</li>
	                            </ul>
	                        </div>
	                    </div>
	                </div>`
                    ;
                        
            $('.modal-body').html(listSW);
        }
    })
}





$.ajax({
    url: "https://localhost:44326/API/Universities",
    success: function (result) {
      
        var university = "";
        $.each(result, function (key,val) {
            university += ` <option value="${val.id}">${val.name}</option>`;
        })
        
        $('#University').html(university);
    }

})

function ExportExcel() {
    $('#example').DataTable().buttons('excel:name').trigger();
}

$(document).ready(function () {
    $('#example').DataTable({
        dom: "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
        buttons: [
            {
                extend: 'excelHtml5',
                name: 'excel',
                title: 'Employee',
                sheetName: 'Employee',
                text: '<i class=""></i>',
                className: 'buttonHide fa fa-download btn-default',
                filename: 'Employee',
                autoFilter: true,
                exportOptions: {
                    columns: [1, 2, 3, 4, 5]
                }
            }
        ],
        'ajax': {
            'url': "Employees/GetAll",
            'dataSrc' : ''
        },
        'columns': [
            {
                "data": "id",
                "render": function (data, type, row, meta) {
                    return meta.row + meta.settings._iDisplayStart + 1;
                }

            },
            {
                "data" : "nik"
            },
            {
                "data": "",
                "render": function (data, type, row, meta) {
                    return row['firstName'] +" "+ row['lastName'];
                }
            },
            {
                "data": "",
                "render": function (data, type, row, meta) {
                    if (row['gender'] == 0) {
                        return "Male";
                    } else {
                        return "Female";
                    }
                   /* return row['gender'] ;*/
                }
            },
            {
                "data": "",
                "render": function (data, type, row, meta) {
                    if (row['phone'].charAt(0) == '0') {
                        return "+62" + row['phone'].substring(1, 11);
                    } else {
                        return row['phone'];
                    }            
                }
            },
            {
                "data": "",
                
                "render": function (data, type, row, meta) {
                    return "Rp " + rubah(row['salary']);
                   
                }
               
            },
            {
                "data": "",

                "render": function (data, type, row, meta) {
                    return `<button type="button" class="btn btn-sm" data-toggle="tooltip" data-placement="top" title="Update" data-bs-toggle="modal" onclick="ModalUpdate(${row['nik']})" data-bs-target=""><i class="fa fa-edit" style='font-size:24px' ></i></button>`
                      
                        + `<button type="button" class="btn btn-sm" data-toggle="tooltip" data-placement="top" title="Delete" onclick="Delete(${row['nik']})"  data-dismiss="modal"><i class="fa fa-trash" style='font-size:24px'></i></button>`;
                }

            }
        ]
    });
     /*   table.ajax.reload(); */
});

function Delete(id) {
    console.log(id);
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: "Employees/Delete/" + id,
                type: "Delete"
            }).then((result) => {
                if (result == 200) {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                    $('#example').DataTable().ajax.reload();
                }
            })
        }
    })
}

function ModalUpdate(nik) {
    /*console.log(nik);*/
   
    $.ajax({
        url: "Employees/Get/"+nik,
        success: function (result) {
            console.log(result);
            $("#ModalUpdate").modal("show");
            $("#Nik1").val(result.nik);
            $("#FirstName1").val(result.firstName);
            $("#LastName1").val(result.lastName);
            $("#PhoneNumber1").val(result.phone);
            var date = result.birthDate.substr(0, 10);
            $("#Birtdate1").val(date);
            $("#Salary1").val(result.salary);
            $("#Email1").val(result.email);
            if (result.gender === 'Male') {
                $("#gender").val(0);
            } else {
                $("#gender").val(1);
            }
                  
        }
    })
}

function Update(id) {
    console.log(id);
    var obj = new Object();
    obj.NIK = $("#Nik1").val();
    obj.FirstName = $("#FirstName1").val();
    obj.LastName = $("#LastName1").val();
    obj.Phone= $("#PhoneNumber1").val();
    obj.BirthDate = $("#Birtdate1").val();
    obj.Salary = parseInt($("#Salary1").val());
    obj.Email = $("#Email1").val();
    obj.Gender = parseInt($("#gender").val());
    console.log(obj);
    $.ajax({
      /*  headers: {
            'Content-Type': 'application/json',
            'charset': 'utf-8'
        },*/
        url: "Employees/Put/",
        type: "PUT",
        data: {id: id, entity: obj}, //objek kalian
        dataType: 'json',
    }).then((result) => {
        console.log(result);
        if (result == 200) {
            Swal.fire(
                'Good job!',
                'Data Updated!',
                'success'
            )
            $("#ModalUpdate").modal("toggle"),
            $('#ModalUpdate').modal('hide'),
            $('#example').DataTable().ajax.reload();
        } else {
            alert("error");
        }
        
    })

}

$.ajax({
    url: "https://localhost:44326/API/Employees/",
    success: function (result) {
        console.log(result.result);
    }

})

function rubah(angka) {
    var reverse = angka.toString().split('').reverse().join(''),
        ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan.join('.').split('').reverse().join('');
    return ribuan;
}

/*$("#LoginForm").validate({
    rules: {
        email: {
            required: true
        },
        password: {
            required: true
        },
        
    },

    errorPlacement: function (error, element) {
        error.insertAfter(element);
    },
    highlight: function (element) {
        $(element).closest('.form-control').addClass('is-invalid');
    },
    unhighlight: function (element) {
        $(element).closest('.form-control').removeClass('is-invalid');
    }

});

function LoginValidation() {
    *//*var obj1 = new Object();
    obj1.Email = $("Email2")
    $.ajax({
        url: "",
        type: "POST",
        data: 
    })*//*
    var a = $("#LoginForm").valid();
    console.log(a);
    if (a == true) {
        Insert();
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Register Failed!',
            footer: 'All columns must be filled !'

        })
    }
}*/

function Insert() {
    var obj = new Object(); 
    obj.NIK = $("#Nik").val();
    obj.FirstName = $("#FirstName").val();
    obj.LastName = $("#LastName").val();
    obj.PhoneNumber = $("#PhoneNumber").val();
    obj.BirthDate = $("#Birtdate").val();
    obj.Salary = parseInt($("#Salary").val());
    obj.Email = $("#Email").val();
    obj.Gender = parseInt($(".Gender:checked").val());
    obj.Password = $("#Password").val();
    obj.Degree = $("#Degree").val();
    obj.Gpa = $("#Gpa").val();
    obj.UniversityId = parseInt($("#University").val());
    var table = $('#example').DataTable();

        console.log(obj);
        coba = '';
        //isi dari object kalian buat sesuai dengan bentuk object yang akan di post
        $.ajax({
              /*  headers: {
                    'Content-Type': 'application/json',
                    'charset': 'utf-8'
                },*/
                url: "Employees/Register/",
                type: "POST",
                'data': obj, //objek kalian
                'dataType': 'json',
        }).done((result) => {
            console.log(result);
                    if (result == 200) {
                        Swal.fire(
                            'Good job!',
                            'Data Inserted!',
                            'success'
                        ), $('#create').modal('hide'),
                            clearTextBox(),
                            table.ajax.reload();
                    } else if (result.message == 'NIK Sudah Terdafar'){
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'NIK already exist!',
                        })
                    } else if (result.message == 'Email Sudah Terdafar'){
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Email already exist!',
                        })
                    } else if (result.message == 'Phone Number Sudah Terdafar') {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Phone Number already exist!',
                        })
                    }
                    
                    
                }).fail((error) => {
                    console.log(error)
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Register Failed!',
                        footer : 'All columns must be filled !'
                        
                    })
            })
   /* }*/
}


$("#EmployeeForm").validate({
    rules: {
        nik: {
            minlength: 16,
            maxlength:16, 
            required: true
        },
        FirstName :{
            required : true
        },
        LastName: {
            required : true
        },
        PhoneNumber: {
            minlength: 11,
            maxlength: 11,
            required: true
        },
        Birtdate: {
            required : true
        },
        Email: {
            emailCustomFormat : true,
           /* validateEmail: true,*/
            required: true
        },
        Password: {
            PasswordCheck : true,
            required: true,
            minlength: 8
        },
        Salary:{
            required: true
        },
        Degree:{
                required: true
        },
        Gpa: {
                required: true
        },
        University: {
                required: true
        }
       
    },
  
    errorPlacement: function (error, element) {
        error.insertAfter(element);
    },
    highlight: function (element) {
        $(element).closest('.form-control').addClass('is-invalid');
    },
    unhighlight: function (element) {
        $(element).closest('.form-control').removeClass('is-invalid');
    }/*,
    messages: {
        nik: "NIK Minimal 12 characters",
        Password: "Password Minimal 12 characters"

    }*/
    
});
function Validation() {
    var a = $("#EmployeeForm").valid();
    console.log(a);
    if (a == true) {
        Insert();
    } else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Register Failed!',
            footer: 'All columns must be filled !'

        })
    }
}



$("#EmployeeForm1").validate({
    rules: {
        nik: {
            minlength: 16,
            maxlength: 16,
            required: true
        },
        FirstName: {
            required: true
        },
        LastName: {
            required: true
        },
        PhoneNumber: {
            minlength: 11,
            maxlength : 11,
            required: true
        },
        Birtdate: {
            required: true
        },
        Email: {
            required: true
        },
        Salary: {
            required: true
        }
   

    },

    errorPlacement: function (error, element) {
  
    },
    highlight: function (element) {
        $(element).closest('.form-control').addClass('is-invalid');
    },
    unhighlight: function (element) {
        $(element).closest('.form-control').removeClass('is-invalid');
    }/*,
    messages: {
        nik: "NIK Minimal 12 characters",
        Password: "Password Minimal 12 characters"

    }*/

});
/*function validateEmail(emailaddress) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (!emailReg.test(emailaddress)) {
        alert("Please enter valid email id");
    }
}*/

$.validator.addMethod("emailCustomFormat", function (value, element) {
    return this.optional(element) || /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(value);
}, "Please_enter_valid_email_message");// 

$.validator.addMethod("PasswordCheck", function (value, element) {
    let password = value;
    if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%&])(.{8,20}$)/.test(password))) {
        return false;
    }
    return true;
}, function (value, element) {
    let password = $(element).val();
    if (!(/^(.{8,20}$)/.test(password))) {
        return 'Password must be between 8 and 20 characters long.';
    }
    else if (!(/^(?=.*[A-Z])/.test(password))) {
        return 'Password must contain atleast one uppercase.';
    }
    else if (!(/^(?=.*[a-z])/.test(password))) {
        return 'Password must contain atleast one lowercase.';
    }
    else if (!(/^(?=.*[0-9])/.test(password))) {
        return 'Password must contain atleast one digit.';
    }
    else if (!(/^(?=.*[@#$%&])/.test(password))) {
        return "Password must contain special characters from @#$%&.";
    }
    return false;
});

function clearTextBox() {
    $('#Nik').val("");
    $('#FirstName').val("");
    $('#LastName').val("");
    $('#PhoneNumber').val("");
    $('#Birtdate').val("");
    $('#Salary').val("");
    $('#Email').val("");
    $('#Password').val("");
    $('#Degree').val("");
    $('#Gpa').val("");
    $('#University').val("");
    $('#Nik').css('border-color', 'lightgrey');
    $('#FirstName').css('border-color', 'lightgrey');
    $('#LastName').css('border-color', 'lightgrey');
    $('#PhoneNumber').css('border-color', 'lightgrey');
    $('#Birtdate').css('border-color', 'lightgrey');
    $('#Salary').css('border-color', 'lightgrey');
    $('#Email').css('border-color', 'lightgrey');
    $('#Password').css('border-color', 'lightgrey');
    $('#Degree').css('border-color', 'lightgrey');
    $('#Gpa').css('border-color', 'lightgrey');
    $('#University').css('border-color', 'lightgrey');
}
