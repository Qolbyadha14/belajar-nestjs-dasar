import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export class Connection {
  getName(): string {
    return null;
  }
}

@Injectable()
export class PGSQLConnection extends Connection {
  getName(): string {
    return 'PGSQL';
  }
}

@Injectable()
export class MongoDBConnection extends Connection {
  getName(): string {
    return 'MongoDB';
  }
}

export function createConnection(configService: ConfigService): Connection {
  if (configService.get('DATABASE') == 'PGSQL') {
    return new PGSQLConnection();
  } else {
    return new MongoDBConnection();
  }
}
