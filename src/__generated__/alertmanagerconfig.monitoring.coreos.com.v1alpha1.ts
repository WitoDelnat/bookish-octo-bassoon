export interface AlertmanagerConfig {
  apiVersion?: string;
  kind?: string;
  metadata?: {};
  spec: {
    inhibitRules?: {
      equal?: string[];
      sourceMatch?: {
        matchType?: "!=" | "=" | "=~" | "!~";
        name: string;
        regex?: boolean;
        value?: string;
      }[];
      targetMatch?: {
        matchType?: "!=" | "=" | "=~" | "!~";
        name: string;
        regex?: boolean;
        value?: string;
      }[];
    }[];
    muteTimeIntervals?: {
      name?: string;
      timeIntervals?: {
        daysOfMonth?: {
          end?: number;
          start?: number;
        }[];
        months?: string[];
        times?: {
          endTime?: string;
          startTime?: string;
        }[];
        weekdays?: string[];
        years?: string[];
      }[];
    }[];
    receivers?: {
      emailConfigs?: {
        authIdentity?: string;
        authPassword?: {
          key: string;
          name?: string;
          optional?: boolean;
        };
        authSecret?: {
          key: string;
          name?: string;
          optional?: boolean;
        };
        authUsername?: string;
        from?: string;
        headers?: {
          key: string;
          value: string;
        }[];
        hello?: string;
        html?: string;
        requireTLS?: boolean;
        sendResolved?: boolean;
        smarthost?: string;
        text?: string;
        tlsConfig?: {
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
          insecureSkipVerify?: boolean;
          keySecret?: {
            key: string;
            name?: string;
            optional?: boolean;
          };
          serverName?: string;
        };
        to?: string;
      }[];
      name: string;
      opsgenieConfigs?: {
        actions?: string;
        apiKey?: {
          key: string;
          name?: string;
          optional?: boolean;
        };
        apiURL?: string;
        details?: {
          key: string;
          value: string;
        }[];
        entity?: string;
        httpConfig?: {
          authorization?: {
            credentials?: {
              key: string;
              name?: string;
              optional?: boolean;
            };
            type?: string;
          };
          basicAuth?: {
            password?: {
              key: string;
              name?: string;
              optional?: boolean;
            };
            username?: {
              key: string;
              name?: string;
              optional?: boolean;
            };
          };
          bearerTokenSecret?: {
            key: string;
            name?: string;
            optional?: boolean;
          };
          followRedirects?: boolean;
          oauth2?: {
            clientId: {
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
            clientSecret: {
              key: string;
              name?: string;
              optional?: boolean;
            };
            endpointParams?: {
              [k: string]: string;
            };
            scopes?: string[];
            tokenUrl: string;
          };
          proxyURL?: string;
          tlsConfig?: {
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
            insecureSkipVerify?: boolean;
            keySecret?: {
              key: string;
              name?: string;
              optional?: boolean;
            };
            serverName?: string;
          };
        };
        message?: string;
        note?: string;
        priority?: string;
        responders?: {
          id?: string;
          name?: string;
          type: "team" | "teams" | "user" | "escalation" | "schedule";
          username?: string;
        }[];
        sendResolved?: boolean;
        source?: string;
        tags?: string;
        updateAlerts?: boolean;
      }[];
      pagerdutyConfigs?: {
        class?: string;
        client?: string;
        clientURL?: string;
        component?: string;
        details?: {
          key: string;
          value: string;
        }[];
        group?: string;
        httpConfig?: {
          authorization?: {
            credentials?: {
              key: string;
              name?: string;
              optional?: boolean;
            };
            type?: string;
          };
          basicAuth?: {
            password?: {
              key: string;
              name?: string;
              optional?: boolean;
            };
            username?: {
              key: string;
              name?: string;
              optional?: boolean;
            };
          };
          bearerTokenSecret?: {
            key: string;
            name?: string;
            optional?: boolean;
          };
          followRedirects?: boolean;
          oauth2?: {
            clientId: {
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
            clientSecret: {
              key: string;
              name?: string;
              optional?: boolean;
            };
            endpointParams?: {
              [k: string]: string;
            };
            scopes?: string[];
            tokenUrl: string;
          };
          proxyURL?: string;
          tlsConfig?: {
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
            insecureSkipVerify?: boolean;
            keySecret?: {
              key: string;
              name?: string;
              optional?: boolean;
            };
            serverName?: string;
          };
        };
        pagerDutyImageConfigs?: {
          alt?: string;
          href?: string;
          src?: string;
        }[];
        pagerDutyLinkConfigs?: {
          alt?: string;
          href?: string;
        }[];
        routingKey?: {
          key: string;
          name?: string;
          optional?: boolean;
        };
        sendResolved?: boolean;
        serviceKey?: {
          key: string;
          name?: string;
          optional?: boolean;
        };
        severity?: string;
        url?: string;
      }[];
      pushoverConfigs?: {
        expire?: string;
        html?: boolean;
        httpConfig?: {
          authorization?: {
            credentials?: {
              key: string;
              name?: string;
              optional?: boolean;
            };
            type?: string;
          };
          basicAuth?: {
            password?: {
              key: string;
              name?: string;
              optional?: boolean;
            };
            username?: {
              key: string;
              name?: string;
              optional?: boolean;
            };
          };
          bearerTokenSecret?: {
            key: string;
            name?: string;
            optional?: boolean;
          };
          followRedirects?: boolean;
          oauth2?: {
            clientId: {
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
            clientSecret: {
              key: string;
              name?: string;
              optional?: boolean;
            };
            endpointParams?: {
              [k: string]: string;
            };
            scopes?: string[];
            tokenUrl: string;
          };
          proxyURL?: string;
          tlsConfig?: {
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
            insecureSkipVerify?: boolean;
            keySecret?: {
              key: string;
              name?: string;
              optional?: boolean;
            };
            serverName?: string;
          };
        };
        message?: string;
        priority?: string;
        retry?: string;
        sendResolved?: boolean;
        sound?: string;
        title?: string;
        token?: {
          key: string;
          name?: string;
          optional?: boolean;
        };
        url?: string;
        urlTitle?: string;
        userKey?: {
          key: string;
          name?: string;
          optional?: boolean;
        };
      }[];
      slackConfigs?: {
        actions?: {
          confirm?: {
            dismissText?: string;
            okText?: string;
            text: string;
            title?: string;
          };
          name?: string;
          style?: string;
          text: string;
          type: string;
          url?: string;
          value?: string;
        }[];
        apiURL?: {
          key: string;
          name?: string;
          optional?: boolean;
        };
        callbackId?: string;
        channel?: string;
        color?: string;
        fallback?: string;
        fields?: {
          short?: boolean;
          title: string;
          value: string;
        }[];
        footer?: string;
        httpConfig?: {
          authorization?: {
            credentials?: {
              key: string;
              name?: string;
              optional?: boolean;
            };
            type?: string;
          };
          basicAuth?: {
            password?: {
              key: string;
              name?: string;
              optional?: boolean;
            };
            username?: {
              key: string;
              name?: string;
              optional?: boolean;
            };
          };
          bearerTokenSecret?: {
            key: string;
            name?: string;
            optional?: boolean;
          };
          followRedirects?: boolean;
          oauth2?: {
            clientId: {
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
            clientSecret: {
              key: string;
              name?: string;
              optional?: boolean;
            };
            endpointParams?: {
              [k: string]: string;
            };
            scopes?: string[];
            tokenUrl: string;
          };
          proxyURL?: string;
          tlsConfig?: {
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
            insecureSkipVerify?: boolean;
            keySecret?: {
              key: string;
              name?: string;
              optional?: boolean;
            };
            serverName?: string;
          };
        };
        iconEmoji?: string;
        iconURL?: string;
        imageURL?: string;
        linkNames?: boolean;
        mrkdwnIn?: string[];
        pretext?: string;
        sendResolved?: boolean;
        shortFields?: boolean;
        text?: string;
        thumbURL?: string;
        title?: string;
        titleLink?: string;
        username?: string;
      }[];
      snsConfigs?: {
        apiURL?: string;
        attributes?: {
          [k: string]: string;
        };
        httpConfig?: {
          authorization?: {
            credentials?: {
              key: string;
              name?: string;
              optional?: boolean;
            };
            type?: string;
          };
          basicAuth?: {
            password?: {
              key: string;
              name?: string;
              optional?: boolean;
            };
            username?: {
              key: string;
              name?: string;
              optional?: boolean;
            };
          };
          bearerTokenSecret?: {
            key: string;
            name?: string;
            optional?: boolean;
          };
          followRedirects?: boolean;
          oauth2?: {
            clientId: {
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
            clientSecret: {
              key: string;
              name?: string;
              optional?: boolean;
            };
            endpointParams?: {
              [k: string]: string;
            };
            scopes?: string[];
            tokenUrl: string;
          };
          proxyURL?: string;
          tlsConfig?: {
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
            insecureSkipVerify?: boolean;
            keySecret?: {
              key: string;
              name?: string;
              optional?: boolean;
            };
            serverName?: string;
          };
        };
        message?: string;
        phoneNumber?: string;
        sendResolved?: boolean;
        sigv4?: {
          accessKey?: {
            key: string;
            name?: string;
            optional?: boolean;
          };
          profile?: string;
          region?: string;
          roleArn?: string;
          secretKey?: {
            key: string;
            name?: string;
            optional?: boolean;
          };
        };
        subject?: string;
        targetARN?: string;
        topicARN?: string;
      }[];
      telegramConfigs?: {
        apiURL?: string;
        botToken?: {
          key: string;
          name?: string;
          optional?: boolean;
        };
        chatID?: number;
        disableNotifications?: boolean;
        httpConfig?: {
          authorization?: {
            credentials?: {
              key: string;
              name?: string;
              optional?: boolean;
            };
            type?: string;
          };
          basicAuth?: {
            password?: {
              key: string;
              name?: string;
              optional?: boolean;
            };
            username?: {
              key: string;
              name?: string;
              optional?: boolean;
            };
          };
          bearerTokenSecret?: {
            key: string;
            name?: string;
            optional?: boolean;
          };
          followRedirects?: boolean;
          oauth2?: {
            clientId: {
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
            clientSecret: {
              key: string;
              name?: string;
              optional?: boolean;
            };
            endpointParams?: {
              [k: string]: string;
            };
            scopes?: string[];
            tokenUrl: string;
          };
          proxyURL?: string;
          tlsConfig?: {
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
            insecureSkipVerify?: boolean;
            keySecret?: {
              key: string;
              name?: string;
              optional?: boolean;
            };
            serverName?: string;
          };
        };
        message?: string;
        parseMode?: "MarkdownV2" | "Markdown" | "HTML";
        sendResolved?: boolean;
      }[];
      victoropsConfigs?: {
        apiKey?: {
          key: string;
          name?: string;
          optional?: boolean;
        };
        apiUrl?: string;
        customFields?: {
          key: string;
          value: string;
        }[];
        entityDisplayName?: string;
        httpConfig?: {
          authorization?: {
            credentials?: {
              key: string;
              name?: string;
              optional?: boolean;
            };
            type?: string;
          };
          basicAuth?: {
            password?: {
              key: string;
              name?: string;
              optional?: boolean;
            };
            username?: {
              key: string;
              name?: string;
              optional?: boolean;
            };
          };
          bearerTokenSecret?: {
            key: string;
            name?: string;
            optional?: boolean;
          };
          followRedirects?: boolean;
          oauth2?: {
            clientId: {
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
            clientSecret: {
              key: string;
              name?: string;
              optional?: boolean;
            };
            endpointParams?: {
              [k: string]: string;
            };
            scopes?: string[];
            tokenUrl: string;
          };
          proxyURL?: string;
          tlsConfig?: {
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
            insecureSkipVerify?: boolean;
            keySecret?: {
              key: string;
              name?: string;
              optional?: boolean;
            };
            serverName?: string;
          };
        };
        messageType?: string;
        monitoringTool?: string;
        routingKey?: string;
        sendResolved?: boolean;
        stateMessage?: string;
      }[];
      webhookConfigs?: {
        httpConfig?: {
          authorization?: {
            credentials?: {
              key: string;
              name?: string;
              optional?: boolean;
            };
            type?: string;
          };
          basicAuth?: {
            password?: {
              key: string;
              name?: string;
              optional?: boolean;
            };
            username?: {
              key: string;
              name?: string;
              optional?: boolean;
            };
          };
          bearerTokenSecret?: {
            key: string;
            name?: string;
            optional?: boolean;
          };
          followRedirects?: boolean;
          oauth2?: {
            clientId: {
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
            clientSecret: {
              key: string;
              name?: string;
              optional?: boolean;
            };
            endpointParams?: {
              [k: string]: string;
            };
            scopes?: string[];
            tokenUrl: string;
          };
          proxyURL?: string;
          tlsConfig?: {
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
            insecureSkipVerify?: boolean;
            keySecret?: {
              key: string;
              name?: string;
              optional?: boolean;
            };
            serverName?: string;
          };
        };
        maxAlerts?: number;
        sendResolved?: boolean;
        url?: string;
        urlSecret?: {
          key: string;
          name?: string;
          optional?: boolean;
        };
      }[];
      wechatConfigs?: {
        agentID?: string;
        apiSecret?: {
          key: string;
          name?: string;
          optional?: boolean;
        };
        apiURL?: string;
        corpID?: string;
        httpConfig?: {
          authorization?: {
            credentials?: {
              key: string;
              name?: string;
              optional?: boolean;
            };
            type?: string;
          };
          basicAuth?: {
            password?: {
              key: string;
              name?: string;
              optional?: boolean;
            };
            username?: {
              key: string;
              name?: string;
              optional?: boolean;
            };
          };
          bearerTokenSecret?: {
            key: string;
            name?: string;
            optional?: boolean;
          };
          followRedirects?: boolean;
          oauth2?: {
            clientId: {
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
            clientSecret: {
              key: string;
              name?: string;
              optional?: boolean;
            };
            endpointParams?: {
              [k: string]: string;
            };
            scopes?: string[];
            tokenUrl: string;
          };
          proxyURL?: string;
          tlsConfig?: {
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
            insecureSkipVerify?: boolean;
            keySecret?: {
              key: string;
              name?: string;
              optional?: boolean;
            };
            serverName?: string;
          };
        };
        message?: string;
        messageType?: string;
        sendResolved?: boolean;
        toParty?: string;
        toTag?: string;
        toUser?: string;
      }[];
    }[];
    route?: {
      continue?: boolean;
      groupBy?: string[];
      groupInterval?: string;
      groupWait?: string;
      matchers?: {
        matchType?: "!=" | "=" | "=~" | "!~";
        name: string;
        regex?: boolean;
        value?: string;
      }[];
      muteTimeIntervals?: string[];
      receiver?: string;
      repeatInterval?: string;
      routes?: {
        [k: string]: unknown;
      }[];
    };
  };
}

  
export function isAlertmanagerConfig(resource: unknown): resource is AlertmanagerConfig {
  return typeof resource === "object" && (resource as any)?.apiVersion === "monitoring.coreos.com/v1alpha1" && (resource as any)?.kind === "AlertmanagerConfig";
}

