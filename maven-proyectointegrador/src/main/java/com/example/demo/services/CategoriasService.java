package com.example.demo.services;

import com.example.demo.models.CategoriasModel;
import com.example.demo.repositories.CategoriasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class CategoriasService {

    @Autowired
    CategoriasRepository categoriasRepository;

    public ArrayList<CategoriasModel> listarCategorias(){
        return (ArrayList<CategoriasModel>) categoriasRepository.findAll();
    }
    public CategoriasModel agregarCategoria(CategoriasModel categoria){
        return categoriasRepository.save(categoria);
    }

    public Optional<CategoriasModel> obtenerPorId(Long id){
        return categoriasRepository.findById(id);
    }

    public boolean eliminarCategoria(Long id) {
        try{
            categoriasRepository.deleteById(id);
            return true;
        }catch(Exception err){
            return false;
        }
    }
}
