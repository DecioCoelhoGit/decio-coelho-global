/**
 * DCGLOBAL.AI™
 * Cognitive Kernel™
 *
 * Bootstrap oficial do Núcleo Operacional
 * do Sistema Cognitivo Vivo.
 */

import { cognitiveKernel } from "./kernel";

import { KernelRuntime } from "./kernel.types";

export function bootstrapKernel(): KernelRuntime {
  cognitiveKernel.initialize();

  cognitiveKernel.register({
    id: "core-kernel",
    name: "Cognitive Kernel™",
    type: "core",
    version: "1.0.0",
    status: "running",
    description: "Núcleo operacional do Sistema Cognitivo Vivo.",
    enabled: true,
  });

  cognitiveKernel.register({
    id: "shared-com",
    name: "Cognitive Object Model™",
    type: "shared",
    version: "1.0.0",
    status: "running",
    description: "DNA semântico dos Objetos Cognitivos.",
    enabled: true,
  });

  cognitiveKernel.register({
    id: "core-registry",
    name: "Kernel Registry™",
    type: "core",
    version: "1.0.0",
    status: "running",
    description: "Registro central de componentes do Kernel.",
    enabled: true,
  });

  cognitiveKernel.register({
    id: "core-lifecycle",
    name: "Kernel Lifecycle™",
    type: "core",
    version: "1.0.0",
    status: "running",
    description: "Gerenciador do ciclo de vida do Kernel.",
    enabled: true,
  });

  cognitiveKernel.register({
    id: "core-health",
    name: "Kernel Health™",
    type: "core",
    version: "1.0.0",
    status: "running",
    description: "Healthcheck operacional do Kernel.",
    enabled: true,
  });

  return cognitiveKernel.start();
}

export function shutdownKernel(): KernelRuntime {
  return cognitiveKernel.stop();
}

export function getBootstrappedKernel(): KernelRuntime {
  return cognitiveKernel.getRuntime();
}
