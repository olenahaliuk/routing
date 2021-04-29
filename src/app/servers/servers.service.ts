interface IServer {
  id: number;
  name: string;
  status: string;
}

export class ServersService {
  private servers: IServer[] = [
    {
      id: 1,
      name: 'Productionserver',
      status: 'online'
    },
    {
      id: 2,
      name: 'Testserver',
      status: 'offline'
    },
    {
      id: 3,
      name: 'Devserver',
      status: 'offline'
    }
  ];

  public getServers(): IServer[] {
    return this.servers;
  }

  public getServer(id: number): IServer {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    return server;
  }

  public updateServer(id: number, serverInfo: { name: string, status: string }): void {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }
}
