CREATE TABLE IF NOT EXISTS server_logs (
      id INT NOT NULL AUTO_INCREMENT,
      server_type VARCHAR(45),
      host VARCHAR(45),
      hostname VARCHAR(45),
      os VARCHAR(45),
      ip VARCHAR(45),
      disk VARCHAR(45),
      datastore VARCHAR(45),
      ram VARCHAR(45),
      cores VARCHAR(45),
      vlan VARCHAR(45),
      sw VARCHAR(45),
      physical_port VARCHAR(45),
      PRIMARY KEY(id)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;