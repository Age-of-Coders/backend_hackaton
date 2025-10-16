import { SeedData } from "../interfaces/seed-data";
import * as dotenv from 'dotenv';
import * as bcrypt from 'bcrypt';

dotenv.config()

export const initialData: SeedData = {
  users: [
    {
      username: 'saibot',
      email: 'tobiasvega1210@gmail.com',
      password: bcrypt.hashSync(process.env.ADMIN_PASSWORD!!, 10),
      roles: ['user', 'admin']
    },
    {
      username: 'crisdecrisis',
      email: 'cristiand.gonzalez094@gmail.com',
      password: bcrypt.hashSync(process.env.ADMIN_PASSWORD!!, 10),
      roles: ['user', 'admin']
    },

    { username: 'devuser01', email: 'devuser01@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'devuser02', email: 'devuser02@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'devuser03', email: 'devuser03@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'devuser04', email: 'devuser04@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'devuser05', email: 'devuser05@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'devuser06', email: 'devuser06@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'devuser07', email: 'devuser07@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'devuser08', email: 'devuser08@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'devuser09', email: 'devuser09@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'devuser10', email: 'devuser10@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },

    { username: 'maria_alfaro', email: 'maria.alfaro@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'juan_perez', email: 'juan.perez@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'laura_mendez', email: 'laura.mendez@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'carlos_ruiz', email: 'carlos.ruiz@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'sofia_garcia', email: 'sofia.garcia@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'pablo_lopez', email: 'pablo.lopez@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'ana_castro', email: 'ana.castro@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'santiago_rios', email: 'santiago.rios@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'valentina_diaz', email: 'valentina.diaz@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'mateo_vargas', email: 'mateo.vargas@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },

    { username: 'lucas_morales', email: 'lucas.morales@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'camila_soto', email: 'camila.soto@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'nicolas_flores', email: 'nicolas.flores@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'isabela_torres', email: 'isabela.torres@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'diego_martin', email: 'diego.martin@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'martina_rodriguez', email: 'martina.rodriguez@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'maximiliano_rueda', email: 'maximiliano.rueda@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'julieta_ortega', email: 'julieta.ortega@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'federico_cano', email: 'federico.cano@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'agustina_perez', email: 'agustina.perez@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },

    { username: 'martin_gomez', email: 'martin.gomez@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'emilia_salazar', email: 'emilia.salazar@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'hernan_vega', email: 'hernan.vega@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'carolina_palma', email: 'carolina.palma@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'jorge_alfonso', email: 'jorge.alfonso@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'soledad_leon', email: 'soledad.leon@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'tomas_silva', email: 'tomas.silva@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'florencia_rios', email: 'florencia.rios@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'alejandro_paz', email: 'alejandro.paz@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'melisa_cordoba', email: 'melisa.cordoba@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },

    { username: 'bruno_marquez', email: 'bruno.marquez@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'pilar_benitez', email: 'pilar.benitez@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'enzo_arias', email: 'enzo.arias@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'camilo_sandoval', email: 'camilo.sandoval@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'maite_galvez', email: 'maite.galvez@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'rodrigo_bustos', email: 'rodrigo.bustos@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'noelia_ramos', email: 'noelia.ramos@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'ivan_cifuentes', email: 'ivan.cifuentes@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'alejandra_mora', email: 'alejandra.mora@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'omar_valle', email: 'omar.valle@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },

    { username: 'delfina_palacios', email: 'delfina.palacios@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'luciana_azz', email: 'luciana.azz@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'max_rojas', email: 'max.rojas@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'britney_mendoza', email: 'britney.mendoza@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'omar_quiroz', email: 'omar.quiroz@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'renata_suarez', email: 'renata.suarez@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'fabián_campos', email: 'fabian.campos@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'nuria_ibl', email: 'nuria.ibl@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'ismael_contr', email: 'ismael.contr@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] },
    { username: 'yasmin_delgado', email: 'yasmin.delgado@example.com', password: bcrypt.hashSync(process.env.USER_PASSWORD!!, 10), roles: ['user'] }
  ]
}
