var Controller = require ('./controller.js');

module.exports = function(app) {

    /////////////////////////////////////////////////////////////////
    // Crear un nuevo estudiante
    app.post('/api/estudiant', Controller.setEstudiant);
    // Devolver todos los estudiantes
    app.get('/api/estudiant', Controller.getEstudiants);
    // Devolver todos los estudiantes ordenador por nombre
    app.get('/api/estudiantOrderNom', Controller.getEstudiantsOrderNom);
    // Devolver todos los estudiantes ordenador por nombre
    app.get('/api/estudiantOrderAssign', Controller.getEstudiantsOrderAssign);
    // Devolver un estudiante
    app.get('/api/estudiant/:estudiant_id', Controller.getEstudiant);
    // Eliminar estudiante
    app.delete('/api/estudiant/:estudiant_id', Controller.deleteEstudiant);
    //Modificar estudiant
    app.put('/api/estudiant/:estudiant_id', Controller.modificarEstudiant);

    /////////////////////////////////////////////////////////////////
    // Añadir asignatura
    app.post('/api/assignatura', Controller.setAssignatura);
    // Listado de asignaturas CU_1
    app.get('/api/assignatura', Controller.getAssignatures);
    // Ver detalle de una asignatura CU_3
    app.post('/api/assignaturafilter', Controller.getAssignaturesFilter);
    // Ver detalle de una asignatura CU_3
    app.post('/api/assignaturafilter2', Controller.getAssignaturesFilter2);
    // Ver detalle de una asignatura CU_3
    app.post('/api/sinfilterAssignature', Controller.getsinfilterAssignature);
    // Ver detalle de una asignatura CU_3
    app.get('/api/assignatura/:assignatura_id', Controller.getAssignatura);
    // Eliminar asignatura
    app.delete('/api/assignatura/:assignatura_id', Controller.deleteAssignatura);
    // Añadir alumno en asignatura CU_2
    app.post('/api/assignatura/:assignatura_id', Controller.addEstudiant);

    //Ver detalle de un estudiante dentro de asignatura CU_4
    /*app.get('/api/subject/:subject_id', Controller.getAssignatura);*/


    // application -------------------------------------------------------------
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // Carga única de la vista
    });
};