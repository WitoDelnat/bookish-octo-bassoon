export interface ThanosRuler {
  apiVersion?: string;
  kind?: string;
  metadata?: {};
  spec: {
    affinity?: {
      nodeAffinity?: {
        preferredDuringSchedulingIgnoredDuringExecution?: {
          preference: {
            matchExpressions?: {
              key: string;
              operator: string;
              values?: string[];
            }[];
            matchFields?: {
              key: string;
              operator: string;
              values?: string[];
            }[];
          };
          weight: number;
        }[];
        requiredDuringSchedulingIgnoredDuringExecution?: {
          nodeSelectorTerms: {
            matchExpressions?: {
              key: string;
              operator: string;
              values?: string[];
            }[];
            matchFields?: {
              key: string;
              operator: string;
              values?: string[];
            }[];
          }[];
        };
      };
      podAffinity?: {
        preferredDuringSchedulingIgnoredDuringExecution?: {
          podAffinityTerm: {
            labelSelector?: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
              }[];
              matchLabels?: {
                [k: string]: string;
              };
            };
            namespaceSelector?: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
              }[];
              matchLabels?: {
                [k: string]: string;
              };
            };
            namespaces?: string[];
            topologyKey: string;
          };
          weight: number;
        }[];
        requiredDuringSchedulingIgnoredDuringExecution?: {
          labelSelector?: {
            matchExpressions?: {
              key: string;
              operator: string;
              values?: string[];
            }[];
            matchLabels?: {
              [k: string]: string;
            };
          };
          namespaceSelector?: {
            matchExpressions?: {
              key: string;
              operator: string;
              values?: string[];
            }[];
            matchLabels?: {
              [k: string]: string;
            };
          };
          namespaces?: string[];
          topologyKey: string;
        }[];
      };
      podAntiAffinity?: {
        preferredDuringSchedulingIgnoredDuringExecution?: {
          podAffinityTerm: {
            labelSelector?: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
              }[];
              matchLabels?: {
                [k: string]: string;
              };
            };
            namespaceSelector?: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
              }[];
              matchLabels?: {
                [k: string]: string;
              };
            };
            namespaces?: string[];
            topologyKey: string;
          };
          weight: number;
        }[];
        requiredDuringSchedulingIgnoredDuringExecution?: {
          labelSelector?: {
            matchExpressions?: {
              key: string;
              operator: string;
              values?: string[];
            }[];
            matchLabels?: {
              [k: string]: string;
            };
          };
          namespaceSelector?: {
            matchExpressions?: {
              key: string;
              operator: string;
              values?: string[];
            }[];
            matchLabels?: {
              [k: string]: string;
            };
          };
          namespaces?: string[];
          topologyKey: string;
        }[];
      };
    };
    alertDropLabels?: string[];
    alertQueryUrl?: string;
    alertRelabelConfigFile?: string;
    alertRelabelConfigs?: {
      key: string;
      name?: string;
      optional?: boolean;
    };
    alertmanagersConfig?: {
      key: string;
      name?: string;
      optional?: boolean;
    };
    alertmanagersUrl?: string[];
    containers?: {
      args?: string[];
      command?: string[];
      env?: {
        name: string;
        value?: string;
        valueFrom?: {
          configMapKeyRef?: {
            key: string;
            name?: string;
            optional?: boolean;
          };
          fieldRef?: {
            apiVersion?: string;
            fieldPath: string;
          };
          resourceFieldRef?: {
            containerName?: string;
            divisor?: number | string;
            resource: string;
          };
          secretKeyRef?: {
            key: string;
            name?: string;
            optional?: boolean;
          };
        };
      }[];
      envFrom?: {
        configMapRef?: {
          name?: string;
          optional?: boolean;
        };
        prefix?: string;
        secretRef?: {
          name?: string;
          optional?: boolean;
        };
      }[];
      image?: string;
      imagePullPolicy?: string;
      lifecycle?: {
        postStart?: {
          exec?: {
            command?: string[];
          };
          httpGet?: {
            host?: string;
            httpHeaders?: {
              name: string;
              value: string;
            }[];
            path?: string;
            port: number | string;
            scheme?: string;
          };
          tcpSocket?: {
            host?: string;
            port: number | string;
          };
        };
        preStop?: {
          exec?: {
            command?: string[];
          };
          httpGet?: {
            host?: string;
            httpHeaders?: {
              name: string;
              value: string;
            }[];
            path?: string;
            port: number | string;
            scheme?: string;
          };
          tcpSocket?: {
            host?: string;
            port: number | string;
          };
        };
      };
      livenessProbe?: {
        exec?: {
          command?: string[];
        };
        failureThreshold?: number;
        grpc?: {
          port: number;
          service?: string;
        };
        httpGet?: {
          host?: string;
          httpHeaders?: {
            name: string;
            value: string;
          }[];
          path?: string;
          port: number | string;
          scheme?: string;
        };
        initialDelaySeconds?: number;
        periodSeconds?: number;
        successThreshold?: number;
        tcpSocket?: {
          host?: string;
          port: number | string;
        };
        terminationGracePeriodSeconds?: number;
        timeoutSeconds?: number;
      };
      name: string;
      ports?: {
        containerPort: number;
        hostIP?: string;
        hostPort?: number;
        name?: string;
        protocol?: string;
      }[];
      readinessProbe?: {
        exec?: {
          command?: string[];
        };
        failureThreshold?: number;
        grpc?: {
          port: number;
          service?: string;
        };
        httpGet?: {
          host?: string;
          httpHeaders?: {
            name: string;
            value: string;
          }[];
          path?: string;
          port: number | string;
          scheme?: string;
        };
        initialDelaySeconds?: number;
        periodSeconds?: number;
        successThreshold?: number;
        tcpSocket?: {
          host?: string;
          port: number | string;
        };
        terminationGracePeriodSeconds?: number;
        timeoutSeconds?: number;
      };
      resources?: {
        limits?: {
          [k: string]: number | string;
        };
        requests?: {
          [k: string]: number | string;
        };
      };
      securityContext?: {
        allowPrivilegeEscalation?: boolean;
        capabilities?: {
          add?: string[];
          drop?: string[];
        };
        privileged?: boolean;
        procMount?: string;
        readOnlyRootFilesystem?: boolean;
        runAsGroup?: number;
        runAsNonRoot?: boolean;
        runAsUser?: number;
        seLinuxOptions?: {
          level?: string;
          role?: string;
          type?: string;
          user?: string;
        };
        seccompProfile?: {
          localhostProfile?: string;
          type: string;
        };
        windowsOptions?: {
          gmsaCredentialSpec?: string;
          gmsaCredentialSpecName?: string;
          hostProcess?: boolean;
          runAsUserName?: string;
        };
      };
      startupProbe?: {
        exec?: {
          command?: string[];
        };
        failureThreshold?: number;
        grpc?: {
          port: number;
          service?: string;
        };
        httpGet?: {
          host?: string;
          httpHeaders?: {
            name: string;
            value: string;
          }[];
          path?: string;
          port: number | string;
          scheme?: string;
        };
        initialDelaySeconds?: number;
        periodSeconds?: number;
        successThreshold?: number;
        tcpSocket?: {
          host?: string;
          port: number | string;
        };
        terminationGracePeriodSeconds?: number;
        timeoutSeconds?: number;
      };
      stdin?: boolean;
      stdinOnce?: boolean;
      terminationMessagePath?: string;
      terminationMessagePolicy?: string;
      tty?: boolean;
      volumeDevices?: {
        devicePath: string;
        name: string;
      }[];
      volumeMounts?: {
        mountPath: string;
        mountPropagation?: string;
        name: string;
        readOnly?: boolean;
        subPath?: string;
        subPathExpr?: string;
      }[];
      workingDir?: string;
    }[];
    enforcedNamespaceLabel?: string;
    evaluationInterval?: string;
    excludedFromEnforcement?: {
      group?: "monitoring.coreos.com";
      name?: string;
      namespace: string;
      resource: "prometheusrules" | "servicemonitors" | "podmonitors" | "probes";
    }[];
    externalPrefix?: string;
    grpcServerTlsConfig?: {
      ca?: {
        configMap?: {
          key: string;
          name?: string;
          optional?: boolean;
        };
        secret?: {
          key: string;
          name?: string;
          optional?: boolean;
        };
      };
      caFile?: string;
      cert?: {
        configMap?: {
          key: string;
          name?: string;
          optional?: boolean;
        };
        secret?: {
          key: string;
          name?: string;
          optional?: boolean;
        };
      };
      certFile?: string;
      insecureSkipVerify?: boolean;
      keyFile?: string;
      keySecret?: {
        key: string;
        name?: string;
        optional?: boolean;
      };
      serverName?: string;
    };
    hostAliases?: {
      hostnames: string[];
      ip: string;
    }[];
    image?: string;
    imagePullSecrets?: {
      name?: string;
    }[];
    initContainers?: {
      args?: string[];
      command?: string[];
      env?: {
        name: string;
        value?: string;
        valueFrom?: {
          configMapKeyRef?: {
            key: string;
            name?: string;
            optional?: boolean;
          };
          fieldRef?: {
            apiVersion?: string;
            fieldPath: string;
          };
          resourceFieldRef?: {
            containerName?: string;
            divisor?: number | string;
            resource: string;
          };
          secretKeyRef?: {
            key: string;
            name?: string;
            optional?: boolean;
          };
        };
      }[];
      envFrom?: {
        configMapRef?: {
          name?: string;
          optional?: boolean;
        };
        prefix?: string;
        secretRef?: {
          name?: string;
          optional?: boolean;
        };
      }[];
      image?: string;
      imagePullPolicy?: string;
      lifecycle?: {
        postStart?: {
          exec?: {
            command?: string[];
          };
          httpGet?: {
            host?: string;
            httpHeaders?: {
              name: string;
              value: string;
            }[];
            path?: string;
            port: number | string;
            scheme?: string;
          };
          tcpSocket?: {
            host?: string;
            port: number | string;
          };
        };
        preStop?: {
          exec?: {
            command?: string[];
          };
          httpGet?: {
            host?: string;
            httpHeaders?: {
              name: string;
              value: string;
            }[];
            path?: string;
            port: number | string;
            scheme?: string;
          };
          tcpSocket?: {
            host?: string;
            port: number | string;
          };
        };
      };
      livenessProbe?: {
        exec?: {
          command?: string[];
        };
        failureThreshold?: number;
        grpc?: {
          port: number;
          service?: string;
        };
        httpGet?: {
          host?: string;
          httpHeaders?: {
            name: string;
            value: string;
          }[];
          path?: string;
          port: number | string;
          scheme?: string;
        };
        initialDelaySeconds?: number;
        periodSeconds?: number;
        successThreshold?: number;
        tcpSocket?: {
          host?: string;
          port: number | string;
        };
        terminationGracePeriodSeconds?: number;
        timeoutSeconds?: number;
      };
      name: string;
      ports?: {
        containerPort: number;
        hostIP?: string;
        hostPort?: number;
        name?: string;
        protocol?: string;
      }[];
      readinessProbe?: {
        exec?: {
          command?: string[];
        };
        failureThreshold?: number;
        grpc?: {
          port: number;
          service?: string;
        };
        httpGet?: {
          host?: string;
          httpHeaders?: {
            name: string;
            value: string;
          }[];
          path?: string;
          port: number | string;
          scheme?: string;
        };
        initialDelaySeconds?: number;
        periodSeconds?: number;
        successThreshold?: number;
        tcpSocket?: {
          host?: string;
          port: number | string;
        };
        terminationGracePeriodSeconds?: number;
        timeoutSeconds?: number;
      };
      resources?: {
        limits?: {
          [k: string]: number | string;
        };
        requests?: {
          [k: string]: number | string;
        };
      };
      securityContext?: {
        allowPrivilegeEscalation?: boolean;
        capabilities?: {
          add?: string[];
          drop?: string[];
        };
        privileged?: boolean;
        procMount?: string;
        readOnlyRootFilesystem?: boolean;
        runAsGroup?: number;
        runAsNonRoot?: boolean;
        runAsUser?: number;
        seLinuxOptions?: {
          level?: string;
          role?: string;
          type?: string;
          user?: string;
        };
        seccompProfile?: {
          localhostProfile?: string;
          type: string;
        };
        windowsOptions?: {
          gmsaCredentialSpec?: string;
          gmsaCredentialSpecName?: string;
          hostProcess?: boolean;
          runAsUserName?: string;
        };
      };
      startupProbe?: {
        exec?: {
          command?: string[];
        };
        failureThreshold?: number;
        grpc?: {
          port: number;
          service?: string;
        };
        httpGet?: {
          host?: string;
          httpHeaders?: {
            name: string;
            value: string;
          }[];
          path?: string;
          port: number | string;
          scheme?: string;
        };
        initialDelaySeconds?: number;
        periodSeconds?: number;
        successThreshold?: number;
        tcpSocket?: {
          host?: string;
          port: number | string;
        };
        terminationGracePeriodSeconds?: number;
        timeoutSeconds?: number;
      };
      stdin?: boolean;
      stdinOnce?: boolean;
      terminationMessagePath?: string;
      terminationMessagePolicy?: string;
      tty?: boolean;
      volumeDevices?: {
        devicePath: string;
        name: string;
      }[];
      volumeMounts?: {
        mountPath: string;
        mountPropagation?: string;
        name: string;
        readOnly?: boolean;
        subPath?: string;
        subPathExpr?: string;
      }[];
      workingDir?: string;
    }[];
    labels?: {
      [k: string]: string;
    };
    listenLocal?: boolean;
    logFormat?: "" | "logfmt" | "json";
    logLevel?: "" | "debug" | "info" | "warn" | "error";
    minReadySeconds?: number;
    nodeSelector?: {
      [k: string]: string;
    };
    objectStorageConfig?: {
      key: string;
      name?: string;
      optional?: boolean;
    };
    objectStorageConfigFile?: string;
    paused?: boolean;
    podMetadata?: {
      annotations?: {
        [k: string]: string;
      };
      labels?: {
        [k: string]: string;
      };
      name?: string;
    };
    portName?: string;
    priorityClassName?: string;
    prometheusRulesExcludedFromEnforce?: {
      ruleName: string;
      ruleNamespace: string;
    }[];
    queryConfig?: {
      key: string;
      name?: string;
      optional?: boolean;
    };
    queryEndpoints?: string[];
    replicas?: number;
    resources?: {
      limits?: {
        [k: string]: number | string;
      };
      requests?: {
        [k: string]: number | string;
      };
    };
    retention?: string;
    routePrefix?: string;
    ruleNamespaceSelector?: {
      matchExpressions?: {
        key: string;
        operator: string;
        values?: string[];
      }[];
      matchLabels?: {
        [k: string]: string;
      };
    };
    ruleSelector?: {
      matchExpressions?: {
        key: string;
        operator: string;
        values?: string[];
      }[];
      matchLabels?: {
        [k: string]: string;
      };
    };
    securityContext?: {
      fsGroup?: number;
      fsGroupChangePolicy?: string;
      runAsGroup?: number;
      runAsNonRoot?: boolean;
      runAsUser?: number;
      seLinuxOptions?: {
        level?: string;
        role?: string;
        type?: string;
        user?: string;
      };
      seccompProfile?: {
        localhostProfile?: string;
        type: string;
      };
      supplementalGroups?: number[];
      sysctls?: {
        name: string;
        value: string;
      }[];
      windowsOptions?: {
        gmsaCredentialSpec?: string;
        gmsaCredentialSpecName?: string;
        hostProcess?: boolean;
        runAsUserName?: string;
      };
    };
    serviceAccountName?: string;
    storage?: {
      disableMountSubPath?: boolean;
      emptyDir?: {
        medium?: string;
        sizeLimit?: number | string;
      };
      ephemeral?: {
        volumeClaimTemplate?: {
          metadata?: {};
          spec: {
            accessModes?: string[];
            dataSource?: {
              apiGroup?: string;
              kind: string;
              name: string;
            };
            dataSourceRef?: {
              apiGroup?: string;
              kind: string;
              name: string;
            };
            resources?: {
              limits?: {
                [k: string]: number | string;
              };
              requests?: {
                [k: string]: number | string;
              };
            };
            selector?: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
              }[];
              matchLabels?: {
                [k: string]: string;
              };
            };
            storageClassName?: string;
            volumeMode?: string;
            volumeName?: string;
          };
        };
      };
      volumeClaimTemplate?: {
        apiVersion?: string;
        kind?: string;
        metadata?: {
          annotations?: {
            [k: string]: string;
          };
          labels?: {
            [k: string]: string;
          };
          name?: string;
        };
        spec?: {
          accessModes?: string[];
          dataSource?: {
            apiGroup?: string;
            kind: string;
            name: string;
          };
          dataSourceRef?: {
            apiGroup?: string;
            kind: string;
            name: string;
          };
          resources?: {
            limits?: {
              [k: string]: number | string;
            };
            requests?: {
              [k: string]: number | string;
            };
          };
          selector?: {
            matchExpressions?: {
              key: string;
              operator: string;
              values?: string[];
            }[];
            matchLabels?: {
              [k: string]: string;
            };
          };
          storageClassName?: string;
          volumeMode?: string;
          volumeName?: string;
        };
        status?: {
          accessModes?: string[];
          allocatedResources?: {
            [k: string]: number | string;
          };
          capacity?: {
            [k: string]: number | string;
          };
          conditions?: {
            lastProbeTime?: string;
            lastTransitionTime?: string;
            message?: string;
            reason?: string;
            status: string;
            type: string;
          }[];
          phase?: string;
          resizeStatus?: string;
        };
      };
    };
    tolerations?: {
      effect?: string;
      key?: string;
      operator?: string;
      tolerationSeconds?: number;
      value?: string;
    }[];
    topologySpreadConstraints?: {
      labelSelector?: {
        matchExpressions?: {
          key: string;
          operator: string;
          values?: string[];
        }[];
        matchLabels?: {
          [k: string]: string;
        };
      };
      matchLabelKeys?: string[];
      maxSkew: number;
      minDomains?: number;
      nodeAffinityPolicy?: string;
      nodeTaintsPolicy?: string;
      topologyKey: string;
      whenUnsatisfiable: string;
    }[];
    tracingConfig?: {
      key: string;
      name?: string;
      optional?: boolean;
    };
    tracingConfigFile?: string;
    volumes?: {
      awsElasticBlockStore?: {
        fsType?: string;
        partition?: number;
        readOnly?: boolean;
        volumeID: string;
      };
      azureDisk?: {
        cachingMode?: string;
        diskName: string;
        diskURI: string;
        fsType?: string;
        kind?: string;
        readOnly?: boolean;
      };
      azureFile?: {
        readOnly?: boolean;
        secretName: string;
        shareName: string;
      };
      cephfs?: {
        monitors: string[];
        path?: string;
        readOnly?: boolean;
        secretFile?: string;
        secretRef?: {
          name?: string;
        };
        user?: string;
      };
      cinder?: {
        fsType?: string;
        readOnly?: boolean;
        secretRef?: {
          name?: string;
        };
        volumeID: string;
      };
      configMap?: {
        defaultMode?: number;
        items?: {
          key: string;
          mode?: number;
          path: string;
        }[];
        name?: string;
        optional?: boolean;
      };
      csi?: {
        driver: string;
        fsType?: string;
        nodePublishSecretRef?: {
          name?: string;
        };
        readOnly?: boolean;
        volumeAttributes?: {
          [k: string]: string;
        };
      };
      downwardAPI?: {
        defaultMode?: number;
        items?: {
          fieldRef?: {
            apiVersion?: string;
            fieldPath: string;
          };
          mode?: number;
          path: string;
          resourceFieldRef?: {
            containerName?: string;
            divisor?: number | string;
            resource: string;
          };
        }[];
      };
      emptyDir?: {
        medium?: string;
        sizeLimit?: number | string;
      };
      ephemeral?: {
        volumeClaimTemplate?: {
          metadata?: {};
          spec: {
            accessModes?: string[];
            dataSource?: {
              apiGroup?: string;
              kind: string;
              name: string;
            };
            dataSourceRef?: {
              apiGroup?: string;
              kind: string;
              name: string;
            };
            resources?: {
              limits?: {
                [k: string]: number | string;
              };
              requests?: {
                [k: string]: number | string;
              };
            };
            selector?: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
              }[];
              matchLabels?: {
                [k: string]: string;
              };
            };
            storageClassName?: string;
            volumeMode?: string;
            volumeName?: string;
          };
        };
      };
      fc?: {
        fsType?: string;
        lun?: number;
        readOnly?: boolean;
        targetWWNs?: string[];
        wwids?: string[];
      };
      flexVolume?: {
        driver: string;
        fsType?: string;
        options?: {
          [k: string]: string;
        };
        readOnly?: boolean;
        secretRef?: {
          name?: string;
        };
      };
      flocker?: {
        datasetName?: string;
        datasetUUID?: string;
      };
      gcePersistentDisk?: {
        fsType?: string;
        partition?: number;
        pdName: string;
        readOnly?: boolean;
      };
      gitRepo?: {
        directory?: string;
        repository: string;
        revision?: string;
      };
      glusterfs?: {
        endpoints: string;
        path: string;
        readOnly?: boolean;
      };
      hostPath?: {
        path: string;
        type?: string;
      };
      iscsi?: {
        chapAuthDiscovery?: boolean;
        chapAuthSession?: boolean;
        fsType?: string;
        initiatorName?: string;
        iqn: string;
        iscsiInterface?: string;
        lun: number;
        portals?: string[];
        readOnly?: boolean;
        secretRef?: {
          name?: string;
        };
        targetPortal: string;
      };
      name: string;
      nfs?: {
        path: string;
        readOnly?: boolean;
        server: string;
      };
      persistentVolumeClaim?: {
        claimName: string;
        readOnly?: boolean;
      };
      photonPersistentDisk?: {
        fsType?: string;
        pdID: string;
      };
      portworxVolume?: {
        fsType?: string;
        readOnly?: boolean;
        volumeID: string;
      };
      projected?: {
        defaultMode?: number;
        sources?: {
          configMap?: {
            items?: {
              key: string;
              mode?: number;
              path: string;
            }[];
            name?: string;
            optional?: boolean;
          };
          downwardAPI?: {
            items?: {
              fieldRef?: {
                apiVersion?: string;
                fieldPath: string;
              };
              mode?: number;
              path: string;
              resourceFieldRef?: {
                containerName?: string;
                divisor?: number | string;
                resource: string;
              };
            }[];
          };
          secret?: {
            items?: {
              key: string;
              mode?: number;
              path: string;
            }[];
            name?: string;
            optional?: boolean;
          };
          serviceAccountToken?: {
            audience?: string;
            expirationSeconds?: number;
            path: string;
          };
        }[];
      };
      quobyte?: {
        group?: string;
        readOnly?: boolean;
        registry: string;
        tenant?: string;
        user?: string;
        volume: string;
      };
      rbd?: {
        fsType?: string;
        image: string;
        keyring?: string;
        monitors: string[];
        pool?: string;
        readOnly?: boolean;
        secretRef?: {
          name?: string;
        };
        user?: string;
      };
      scaleIO?: {
        fsType?: string;
        gateway: string;
        protectionDomain?: string;
        readOnly?: boolean;
        secretRef: {
          name?: string;
        };
        sslEnabled?: boolean;
        storageMode?: string;
        storagePool?: string;
        system: string;
        volumeName?: string;
      };
      secret?: {
        defaultMode?: number;
        items?: {
          key: string;
          mode?: number;
          path: string;
        }[];
        optional?: boolean;
        secretName?: string;
      };
      storageos?: {
        fsType?: string;
        readOnly?: boolean;
        secretRef?: {
          name?: string;
        };
        volumeName?: string;
        volumeNamespace?: string;
      };
      vsphereVolume?: {
        fsType?: string;
        storagePolicyID?: string;
        storagePolicyName?: string;
        volumePath: string;
      };
    }[];
  };
  status?: {
    availableReplicas: number;
    paused: boolean;
    replicas: number;
    unavailableReplicas: number;
    updatedReplicas: number;
  };
}

  
export function isThanosRuler(resource: unknown): resource is ThanosRuler {
  return typeof resource === "object" && (resource as any)?.apiVersion === "monitoring.coreos.com/v1" && (resource as any)?.kind === "ThanosRuler";
}

