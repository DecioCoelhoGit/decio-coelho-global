/**
 * DCGLOBAL.AI™
 * Cognitive Reasoning™
 *
 * Scheduler oficial da Camada
 * de Raciocínio Cognitivo.
 */

import {
  ReasoningEventType,
} from "./reasoning.event";

import {
  dispatchReasoningEvent,
} from "./reasoning.dispatcher";

export interface ReasoningSchedule {
  id: string;
  reasoningId: string;
  eventType: ReasoningEventType;
  runAt: string;
  actor: string;
  metadata?: Record<string, unknown>;
  executed: boolean;
}

const reasoningSchedules:
  ReasoningSchedule[] = [];

export function scheduleReasoningEvent(
  reasoningId: string,
  eventType: ReasoningEventType,
  runAt: string,
  actor = "reasoning-scheduler",
  metadata: Record<string, unknown> = {}
): ReasoningSchedule {
  const schedule: ReasoningSchedule = {
    id: `reasoning-schedule-${Date.now()}`,
    reasoningId,
    eventType,
    runAt,
    actor,
    metadata,
    executed: false,
  };

  reasoningSchedules.push(schedule);

  return schedule;
}

export function runDueReasoningSchedules(
  now: string = new Date().toISOString()
): ReasoningSchedule[] {
  const executed: ReasoningSchedule[] = [];

  for (const schedule of reasoningSchedules) {
    if (
      !schedule.executed &&
      schedule.runAt <= now
    ) {
      dispatchReasoningEvent(
        schedule.reasoningId,
        schedule.eventType,
        schedule.actor,
        schedule.metadata
      );

      schedule.executed = true;
      executed.push(schedule);
    }
  }

  return executed;
}

export function listReasoningSchedules():
  ReasoningSchedule[] {
  return [...reasoningSchedules];
}

export function listPendingReasoningSchedules():
  ReasoningSchedule[] {
  return reasoningSchedules.filter(
    schedule => !schedule.executed
  );
}

export function clearReasoningSchedules(): void {
  reasoningSchedules.length = 0;
}

export function countReasoningSchedules(): number {
  return reasoningSchedules.length;
}
