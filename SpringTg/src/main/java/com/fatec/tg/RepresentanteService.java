package com.fatec.tg;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fatec.tg.entity.RepresentanteEntity;
import com.fatec.tg.repository.RepresentanteRepository;

//import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class RepresentanteService {
    @Autowired
    private RepresentanteRepository repository;
     
     public String gravar(RepresentanteDTO dto){
        RepresentanteEntity entity = new RepresentanteEntity();
        
        entity.setCodigo(dto.getCodigo());
        entity.setEmail(dto.getEmail());
        entity.setSenha(dto.getSenha());
        entity.setNome(dto.getNome());
        repository.save(entity);

        return "tudo certo";
     }

     public RepresentanteDTO carregar(long codigo){
        RepresentanteDTO dto = new RepresentanteDTO();
        Optional<RepresentanteEntity> retorno = repository.findById(codigo);
        if(retorno.isPresent()){
            dto.setCodigo(retorno.get().getCodigo());
            dto.setNome(retorno.get().getNome());
            dto.setEmail(retorno.get().getEmail());
            dto.setSenha(retorno.get().getSenha());
        }
        return dto;        
     }

    public String remover(long codigo) {
        RepresentanteEntity obj = new RepresentanteEntity();
        obj.setCodigo(codigo);
        repository.delete(obj);
        return "tudo certo";
    }

    public List<RepresentanteEntity> listar() {
        return  repository.findAll();
    }

    
    public List<RepresentanteEntity> buscarRepresentantePorEmail(String email) {
        return repository.findByEmail(email);
    }

}
