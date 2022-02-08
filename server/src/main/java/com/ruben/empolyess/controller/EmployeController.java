package com.ruben.empolyess.controller;

import java.util.List;
import com.ruben.empolyess.models.Message;
import com.ruben.empolyess.models.Employe;
import com.ruben.empolyess.service.EmployeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(value = "*")
public class EmployeController {
    
    @Autowired
    private EmployeService employeService;

    @GetMapping("/employes")
    public List<Employe> findAll(){
        return employeService.findAll();
    }

    @GetMapping("/employes/{id}")
    public ResponseEntity<Employe> findById(@PathVariable(name = "id") Long id){
        Employe employe = employeService.findById(id);
        if(employe!=null){
            return new ResponseEntity<Employe>(employe,HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @PostMapping("/employes")
    public Employe save(@RequestBody Employe employe){
        return employeService.save(employe);
    }

    @PutMapping("employes")
    public ResponseEntity<Message> update(@RequestBody Employe employe){
        boolean update = employeService.update(employe);
        if(update){
            return new ResponseEntity<>(new Message("Deleted employe"),HttpStatus.OK);
        }
        return new ResponseEntity<>(new Message("Error"),HttpStatus.EXPECTATION_FAILED);
    }


    @DeleteMapping("/employes/{id}")
    public ResponseEntity<Message> delete(@PathVariable("id") Long id){
        boolean delete = employeService.delete(id);
        if(delete){
            return new ResponseEntity<>(new Message("Deleted employe"),HttpStatus.OK);
        }
        return new ResponseEntity<>(new Message("Error"),HttpStatus.EXPECTATION_FAILED);
    }
}
