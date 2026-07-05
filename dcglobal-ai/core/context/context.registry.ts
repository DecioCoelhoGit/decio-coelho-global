/**
 * DCGLOBAL.AI™
 * Cognitive Context™
 *
 * Registry oficial da Camada de
 * Consciência Contextual.
 * Responsável por registrar,
 * localizar e catalogar todos os
 * contextos do Sistema Cognitivo.
 */

import {
  ContextScope,
  ContextStatus,
} from "./context.types";

export interface ContextRegistryEntry {
  id: string;
  name: string;
  scope: ContextScope;
  description: string;
  version: string;
  enabled: boolean;
  status: ContextStatus;
  searchable: boolean;
  cacheable: boolean;
  persistent: boolean;
}

export const contextRegistry: ContextRegistryEntry[] = [
  {
    id: "system",
    name: "System Context",
    scope: "system",
    description: "Estado geral do sistema.",
    version: "1.0.0",
    enabled: true,
    status: "active",
    searchable: true,
    cacheable: true,
    persistent: true,
  },
  {
    id: "user",
    name: "User Context",
    scope: "user",
    description: "Contexto do usuário.",
    version: "1.0.0",
    enabled: true,
    status: "active",
    searchable: true,
    cacheable: true,
    persistent: true,
  },
  {
    id: "session",
    name: "Session Context",
    scope: "session",
    description: "Sessão cognitiva ativa.",
    version: "1.0.0",
    enabled: true,
    status: "active",
    searchable: true,
    cacheable: true,
    persistent: false,
  },
  {
    id: "operational",
    name: "Operational Context",
    scope: "operational",
    description: "Estado operacional.",
    version: "1.0.0",
    enabled: true,
    status: "active",
    searchable: true,
    cacheable: true,
    persistent: true,
  },
  {
    id: "temporal",
    name: "Temporal Context",
    scope: "temporal",
    description: "Informações temporais.",
    version: "1.0.0",
    enabled: true,
    status: "active",
    searchable: true,
    cacheable: false,
    persistent: false,
  },
  {
    id: "cognitive",
    name: "Cognitive Context",
    scope: "cognitive",
    description: "Estado cognitivo atual.",
    version: "1.0.0",
    enabled: true,
    status: "active",
    searchable: true,
    cacheable: true,
    persistent: true,
  },
  {
    id: "security",
    name: "Security Context",
    scope: "security",
    description: "Contexto de segurança.",
    version: "1.0.0",
    enabled: true,
    status: "active",
    searchable: false,
    cacheable: false,
    persistent: true,
  },
  {
    id: "governance",
    name: "Governance Context",
    scope: "governance",
    description: "Governança e auditoria.",
    version: "1.0.0",
    enabled: true,
    status: "active",
    searchable: true,
    cacheable: false,
    persistent: true,
  },
];

export function getContextRegistry(): ContextRegistryEntry[] {
  return contextRegistry;
}

export function findContext(
  id: string
): ContextRegistryEntry | undefined {
  return contextRegistry.find(
    context => context.id === id
  );
}

export function listEnabledContexts(): ContextRegistryEntry[] {
  return contextRegistry.filter(
    context => context.enabled
  );
}

export function countContexts(): number {
  return contextRegistry.length;
}
