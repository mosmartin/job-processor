import { ConfigService } from '@nestjs/config';
import { Client } from 'pulsar-client';
import { Injectable, OnModuleDestroy } from '@nestjs/common';

@Injectable()
export class PulsarClient implements OnModuleDestroy {
  private readonly client = new Client({
    serviceUrl: this.configService.getOrThrow('PULSAR_SERVICE_URL'),
  });

  constructor(private readonly configService: ConfigService) {}

  async createProducer(topic: string) {
    return this.client.createProducer({
      topic,
    });
  }

  async onModuleDestroy() {
    await this.client.close();
  }
}
