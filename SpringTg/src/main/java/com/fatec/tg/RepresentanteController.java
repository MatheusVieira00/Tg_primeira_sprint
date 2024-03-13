package com.fatec.tg;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fatec.tg.entity.RepresentanteEntity;

@RestController
@CrossOrigin( origins = "*" )
public class RepresentanteController {
    @Autowired
    RepresentanteService service;
   
    @GetMapping("/api/representante/{codigo}")
    public ResponseEntity<RepresentanteDTO> carregar(@PathVariable long codigo){
        RepresentanteDTO obj = service.carregar(codigo);
        return ResponseEntity.ok(obj);
    }

    @PostMapping("/api/representante")
    public ResponseEntity<String> gravar(@RequestBody RepresentanteDTO obj){
        String mensagem = service.gravar(obj);
        return ResponseEntity.ok(mensagem); 
    }
    
    @PutMapping("/api/representante")
    public ResponseEntity<String> atualizar(@RequestBody RepresentanteDTO obj){
        String mensagem = service.gravar(obj);
        return ResponseEntity.ok(mensagem); 
    }

    @DeleteMapping("/api/representante/{codigo}")
    public ResponseEntity<String> remover(@PathVariable long codigo){
        String menString = service.remover(codigo);
        return ResponseEntity.ok(menString);
    }

    @GetMapping("/api/representantes")
    public ResponseEntity<List<RepresentanteEntity>> listar(){
        return ResponseEntity.ok(service.listar());
    }

    @PostMapping("/api/representante/login")
    public RepresentanteEntity fazerLogin(@RequestBody RepresentanteEntity dto){
        List<RepresentanteEntity> representantes = service.buscarRepresentantePorEmail(dto.getEmail());
        if (representantes != null) {
    		for (RepresentanteEntity representante : representantes) {
                System.out.println(representante.getSenha());
                System.out.println(dto.getSenha());
				if (representante.getSenha().equals(dto.getSenha()))
                    return representante;
			}
    	}
        return new RepresentanteEntity();
    }
    
    @GetMapping("/api/email/{email}")
    public ResponseEntity<List<RepresentanteEntity>> buscarRepresentantePorEmail(@PathVariable String email) {
        List<RepresentanteEntity> representantes = service.buscarRepresentantePorEmail(email);
        return ResponseEntity.ok(representantes);
    }

}
