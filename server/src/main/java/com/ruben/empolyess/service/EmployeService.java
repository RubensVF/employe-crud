package com.ruben.empolyess.service;

import com.ruben.empolyess.repository.EmployeRepo;

import java.util.List;
import java.util.Optional;

import com.ruben.empolyess.models.Employe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class EmployeService {
    
    @Autowired
    private EmployeRepo employeRepo;

    public List<Employe> findAll(){
        return (List<Employe>) employeRepo.findAll();
    }

    public Employe findById(Long id){
        return employeRepo.findById(id).orElse(null);
    }  

    public Employe save(Employe employe){
        return employeRepo.save(employe);
    }

    public boolean delete(Long id){
        try {
            employeRepo.deleteById(id);
            return true;
        } catch (Exception e) {
        }
        return false;
    }

    public boolean update(Employe employe){
        Optional<Employe> employeExists = employeRepo.findById(employe.getId());
        
        if(employeExists.isPresent()){
            try{
            Employe employeAux = employeExists.get();
            employeAux.setName(employe.getName());
            employeAux.setEmail(employe.getEmail());
            employeAux.setSalary(employe.getSalary());
            employeRepo.save(employeAux);
            return true;
            }catch(Exception e){
            }
        }

        return false;
    }

}
