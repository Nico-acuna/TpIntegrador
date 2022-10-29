package com.example.demo.controllers;

import com.example.demo.models.CategoriasModel;
import com.example.demo.services.CategoriasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/categorias")
public class CategoriasController {

    @Autowired
    CategoriasService categoriasService;

    @GetMapping()
    public ArrayList<CategoriasModel> listarCategorias(){
        return categoriasService.listarCategorias();
    }

    @PostMapping()
    public CategoriasModel agregarCategoria(@RequestBody CategoriasModel categoria){
        return this.categoriasService.agregarCategoria(categoria);
    };

    @GetMapping(path="/{id}")
    public Optional<CategoriasModel> obtenerPorId (@PathVariable("id") Long id){
        return this.categoriasService.obtenerPorId(id);
    };

    @DeleteMapping(path="/{id}")
    public String eliminarCategoria (@PathVariable ("id") Long id){
        boolean ok = this.categoriasService.eliminarCategoria(id);
        if(ok){
            return "Se eliminó la categoria con id: " + id;
        }else{
            return "No se pudo eliminar la categoria con id: " +id;
        }
    }
}
