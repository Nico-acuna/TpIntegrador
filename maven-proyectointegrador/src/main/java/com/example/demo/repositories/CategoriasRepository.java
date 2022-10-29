package com.example.demo.repositories;

import com.example.demo.models.CategoriasModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoriasRepository extends CrudRepository<CategoriasModel, Long> {
}
