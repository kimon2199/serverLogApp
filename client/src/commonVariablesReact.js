const sql_head = ['server_type','host', 'hostname','os','ip','disk','datastore','ram','cores','vlan','sw','physical_port'];
const titles = ['Server Type','Host', 'Hostname','OS','IP','Disk','Datastore','RAM','Cores','VLAN','SW','Physical Port'];
const emptyRow = {server_type: 'BM', host: '', 
hostname: '', os: '', ip: '', disk: '', datastore: '', ram: '', 
cores: '', vlan: '', sw: '', physical_port: ''};

export { sql_head, titles, emptyRow };