import { SuiEvent } from '@mysten/sui/client';
import { Prisma } from '@prisma/client';
import { databaseService } from './db';

type Event = CalculateEvent;

type CalculateEvent = {
  id: string;
  type: string;
  num1: number;
  num2: number;
  ans: number;
};

export const handleCalcObjects = async (events: SuiEvent[], type: string) => {
  const updates: Record<string, Prisma.CalcCreateInput> = {};
  for (const event of events) {
    if (!event.type.startsWith(type))
      throw new Error('Invalid event module origin');
    const data = event.parsedJson as Event;
    if (!Object.prototype.hasOwnProperty.call(updates, data.id)) {
      updates[data.id] = {
        objectId: data.id,
        type: data.type,
        num1: data.num1,
        num2: data.num2,
        ans: data.ans,
      };
    }
  }

  // Assign a value to databaseService
  const promises = Object.values(updates).map((update) =>
    databaseService.calc.create({
      data: update,
    }),
  );
  await Promise.all(promises);
};
