/**
 * @generated SignedSource<<fa7aec1a77d2a8bc4a33325283f84adf>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DashboardPageAnalytics_query$data = {
  readonly dashboardAnalytics: {
    readonly bottomSessions: ReadonlyArray<{
      readonly avgSentimentScore: number | null | undefined;
      readonly compactionCount: number | null | undefined;
      readonly focusScore: number | null | undefined;
      readonly score: number | null | undefined;
      readonly sentimentTrend: string | null | undefined;
      readonly sessionId: string | null | undefined;
      readonly slug: string | null | undefined;
      readonly startedAt: string | null | undefined;
      readonly summary: string | null | undefined;
      readonly taskCompletionRate: number | null | undefined;
      readonly turnCount: number | null | undefined;
    }> | null | undefined;
    readonly compactionStats: {
      readonly autoCompactCount: number | null | undefined;
      readonly avgCompactionsPerSession: number | null | undefined;
      readonly continuationCount: number | null | undefined;
      readonly manualCompactCount: number | null | undefined;
      readonly sessionsWithCompactions: number | null | undefined;
      readonly sessionsWithoutCompactions: number | null | undefined;
      readonly totalCompactions: number | null | undefined;
    } | null | undefined;
    readonly costAnalysis: {
      readonly billingType: string | null | undefined;
      readonly breakEvenDailySpend: number | null | undefined;
      readonly cacheHitRate: number | null | undefined;
      readonly cacheSavingsUsd: number | null | undefined;
      readonly configDirBreakdowns: ReadonlyArray<{
        readonly breakEvenDailySpend: number | null | undefined;
        readonly cacheHitRate: number | null | undefined;
        readonly cacheSavingsUsd: number | null | undefined;
        readonly configDirId: string | null | undefined;
        readonly configDirName: string | null | undefined;
        readonly costPerSession: number | null | undefined;
        readonly costUtilizationPercent: number | null | undefined;
        readonly dailyCostTrend: ReadonlyArray<{
          readonly costUsd: number | null | undefined;
          readonly date: string | null | undefined;
          readonly sessionCount: number | null | undefined;
        }> | null | undefined;
        readonly estimatedCostUsd: number | null | undefined;
        readonly isEstimated: boolean | null | undefined;
        readonly modelCount: number | null | undefined;
        readonly potentialSavingsUsd: number | null | undefined;
        readonly subscriptionComparisons: ReadonlyArray<{
          readonly apiCreditCostUsd: number | null | undefined;
          readonly monthlyCostUsd: number | null | undefined;
          readonly recommendation: string | null | undefined;
          readonly savingsPercent: number | null | undefined;
          readonly savingsUsd: number | null | undefined;
          readonly tierName: string | null | undefined;
        }> | null | undefined;
        readonly topSessionsByCost: ReadonlyArray<{
          readonly cacheReadTokens: number | null | undefined;
          readonly costUsd: number | null | undefined;
          readonly inputTokens: number | null | undefined;
          readonly messageCount: number | null | undefined;
          readonly outputTokens: number | null | undefined;
          readonly sessionId: string | null | undefined;
          readonly slug: string | null | undefined;
          readonly startedAt: string | null | undefined;
        }> | null | undefined;
        readonly totalMessages: number | null | undefined;
        readonly totalSessions: number | null | undefined;
        readonly weeklyCostTrend: ReadonlyArray<{
          readonly avgDailyCost: number | null | undefined;
          readonly costUsd: number | null | undefined;
          readonly sessionCount: number | null | undefined;
          readonly weekLabel: string | null | undefined;
          readonly weekStart: string | null | undefined;
        }> | null | undefined;
      }> | null | undefined;
      readonly costPerCompletedTask: number | null | undefined;
      readonly costPerSession: number | null | undefined;
      readonly costUtilizationPercent: number | null | undefined;
      readonly dailyCostTrend: ReadonlyArray<{
        readonly costUsd: number | null | undefined;
        readonly date: string | null | undefined;
        readonly sessionCount: number | null | undefined;
      }> | null | undefined;
      readonly estimatedCostUsd: number | null | undefined;
      readonly isEstimated: boolean | null | undefined;
      readonly maxSubscriptionCostUsd: number | null | undefined;
      readonly potentialSavingsUsd: number | null | undefined;
      readonly subscriptionComparisons: ReadonlyArray<{
        readonly apiCreditCostUsd: number | null | undefined;
        readonly monthlyCostUsd: number | null | undefined;
        readonly recommendation: string | null | undefined;
        readonly savingsPercent: number | null | undefined;
        readonly savingsUsd: number | null | undefined;
        readonly tierName: string | null | undefined;
      }> | null | undefined;
      readonly topSessionsByCost: ReadonlyArray<{
        readonly cacheReadTokens: number | null | undefined;
        readonly costUsd: number | null | undefined;
        readonly inputTokens: number | null | undefined;
        readonly messageCount: number | null | undefined;
        readonly outputTokens: number | null | undefined;
        readonly sessionId: string | null | undefined;
        readonly slug: string | null | undefined;
        readonly startedAt: string | null | undefined;
      }> | null | undefined;
      readonly weeklyCostTrend: ReadonlyArray<{
        readonly avgDailyCost: number | null | undefined;
        readonly costUsd: number | null | undefined;
        readonly sessionCount: number | null | undefined;
        readonly weekLabel: string | null | undefined;
        readonly weekStart: string | null | undefined;
      }> | null | undefined;
    } | null | undefined;
    readonly hookHealth: ReadonlyArray<{
      readonly avgDurationMs: number | null | undefined;
      readonly failCount: number | null | undefined;
      readonly hookName: string | null | undefined;
      readonly passCount: number | null | undefined;
      readonly passRate: number | null | undefined;
      readonly totalRuns: number | null | undefined;
    }> | null | undefined;
    readonly humanTimeEstimate: {
      readonly breakdown: ReadonlyArray<{
        readonly category: string | null | undefined;
        readonly humanSeconds: number | null | undefined;
        readonly percent: number | null | undefined;
      }> | null | undefined;
      readonly hoursSaved: number | null | undefined;
      readonly speedupFactor: number | null | undefined;
      readonly toolBreakdown: ReadonlyArray<{
        readonly humanSeconds: number | null | undefined;
        readonly invocations: number | null | undefined;
        readonly toolName: string | null | undefined;
      }> | null | undefined;
      readonly totalAiSeconds: number | null | undefined;
      readonly totalHumanSeconds: number | null | undefined;
    } | null | undefined;
    readonly performanceTrend: ReadonlyArray<{
      readonly avgCompactions: number | null | undefined;
      readonly avgEffectiveness: number | null | undefined;
      readonly avgTurns: number | null | undefined;
      readonly sessionCount: number | null | undefined;
      readonly weekLabel: string | null | undefined;
      readonly weekStart: string | null | undefined;
    }> | null | undefined;
    readonly subagentUsage: ReadonlyArray<{
      readonly count: number | null | undefined;
      readonly subagentType: string | null | undefined;
    }> | null | undefined;
    readonly toolUsage: ReadonlyArray<{
      readonly count: number | null | undefined;
      readonly toolName: string | null | undefined;
    }> | null | undefined;
    readonly topSessions: ReadonlyArray<{
      readonly avgSentimentScore: number | null | undefined;
      readonly compactionCount: number | null | undefined;
      readonly focusScore: number | null | undefined;
      readonly score: number | null | undefined;
      readonly sentimentTrend: string | null | undefined;
      readonly sessionId: string | null | undefined;
      readonly slug: string | null | undefined;
      readonly startedAt: string | null | undefined;
      readonly summary: string | null | undefined;
      readonly taskCompletionRate: number | null | undefined;
      readonly turnCount: number | null | undefined;
    }> | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "DashboardPageAnalytics_query";
};
export type DashboardPageAnalytics_query$key = {
  readonly " $data"?: DashboardPageAnalytics_query$data;
  readonly " $fragmentSpreads": FragmentRefs<"DashboardPageAnalytics_query">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "count",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "sessionId",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "startedAt",
  "storageKey": null
},
v4 = [
  (v1/*: any*/),
  (v2/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "summary",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "score",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "sentimentTrend",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "avgSentimentScore",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "turnCount",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "taskCompletionRate",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "compactionCount",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "focusScore",
    "storageKey": null
  },
  (v3/*: any*/)
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "toolName",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "weekStart",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "weekLabel",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "sessionCount",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "humanSeconds",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "estimatedCostUsd",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isEstimated",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cacheSavingsUsd",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "costUtilizationPercent",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "costUsd",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "concreteType": "DailyCost",
  "kind": "LinkedField",
  "name": "dailyCostTrend",
  "plural": true,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "date",
      "storageKey": null
    },
    (v14/*: any*/),
    (v8/*: any*/)
  ],
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "concreteType": "WeeklyCost",
  "kind": "LinkedField",
  "name": "weeklyCostTrend",
  "plural": true,
  "selections": [
    (v6/*: any*/),
    (v7/*: any*/),
    (v14/*: any*/),
    (v8/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "avgDailyCost",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "concreteType": "SessionCost",
  "kind": "LinkedField",
  "name": "topSessionsByCost",
  "plural": true,
  "selections": [
    (v1/*: any*/),
    (v2/*: any*/),
    (v14/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "inputTokens",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "outputTokens",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "cacheReadTokens",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "messageCount",
      "storageKey": null
    },
    (v3/*: any*/)
  ],
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "costPerSession",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cacheHitRate",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "potentialSavingsUsd",
  "storageKey": null
},
v21 = {
  "alias": null,
  "args": null,
  "concreteType": "SubscriptionComparison",
  "kind": "LinkedField",
  "name": "subscriptionComparisons",
  "plural": true,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "tierName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "monthlyCostUsd",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "apiCreditCostUsd",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "savingsUsd",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "savingsPercent",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "recommendation",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "breakEvenDailySpend",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "projectId"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "repoId"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "DashboardPageAnalytics_query",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "days",
          "value": 30
        },
        {
          "kind": "Variable",
          "name": "projectId",
          "variableName": "projectId"
        },
        {
          "kind": "Variable",
          "name": "repoId",
          "variableName": "repoId"
        }
      ],
      "concreteType": "DashboardAnalytics",
      "kind": "LinkedField",
      "name": "dashboardAnalytics",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "SubagentUsageStats",
          "kind": "LinkedField",
          "name": "subagentUsage",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "subagentType",
              "storageKey": null
            },
            (v0/*: any*/)
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "CompactionStats",
          "kind": "LinkedField",
          "name": "compactionStats",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "totalCompactions",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "sessionsWithCompactions",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "sessionsWithoutCompactions",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "avgCompactionsPerSession",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "autoCompactCount",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "manualCompactCount",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "continuationCount",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "SessionEffectiveness",
          "kind": "LinkedField",
          "name": "topSessions",
          "plural": true,
          "selections": (v4/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "SessionEffectiveness",
          "kind": "LinkedField",
          "name": "bottomSessions",
          "plural": true,
          "selections": (v4/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "ToolUsageStats",
          "kind": "LinkedField",
          "name": "toolUsage",
          "plural": true,
          "selections": [
            (v5/*: any*/),
            (v0/*: any*/)
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "HookHealthStats",
          "kind": "LinkedField",
          "name": "hookHealth",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hookName",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "totalRuns",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "passCount",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "failCount",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "passRate",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "avgDurationMs",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "SessionPerformancePoint",
          "kind": "LinkedField",
          "name": "performanceTrend",
          "plural": true,
          "selections": [
            (v6/*: any*/),
            (v7/*: any*/),
            (v8/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "avgTurns",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "avgCompactions",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "avgEffectiveness",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "HumanTimeEstimate",
          "kind": "LinkedField",
          "name": "humanTimeEstimate",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "totalHumanSeconds",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "totalAiSeconds",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "speedupFactor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hoursSaved",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "HumanTimeBreakdown",
              "kind": "LinkedField",
              "name": "breakdown",
              "plural": true,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "category",
                  "storageKey": null
                },
                (v9/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "percent",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "ToolTimeEstimate",
              "kind": "LinkedField",
              "name": "toolBreakdown",
              "plural": true,
              "selections": [
                (v5/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "invocations",
                  "storageKey": null
                },
                (v9/*: any*/)
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "CostAnalysis",
          "kind": "LinkedField",
          "name": "costAnalysis",
          "plural": false,
          "selections": [
            (v10/*: any*/),
            (v11/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "billingType",
              "storageKey": null
            },
            (v12/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "maxSubscriptionCostUsd",
              "storageKey": null
            },
            (v13/*: any*/),
            (v15/*: any*/),
            (v16/*: any*/),
            (v17/*: any*/),
            (v18/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "costPerCompletedTask",
              "storageKey": null
            },
            (v19/*: any*/),
            (v20/*: any*/),
            (v21/*: any*/),
            (v22/*: any*/),
            {
              "alias": null,
              "args": null,
              "concreteType": "ConfigDirCostBreakdown",
              "kind": "LinkedField",
              "name": "configDirBreakdowns",
              "plural": true,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "configDirId",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "configDirName",
                  "storageKey": null
                },
                (v10/*: any*/),
                (v11/*: any*/),
                (v12/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "totalSessions",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "totalMessages",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "modelCount",
                  "storageKey": null
                },
                (v18/*: any*/),
                (v19/*: any*/),
                (v20/*: any*/),
                (v13/*: any*/),
                (v15/*: any*/),
                (v16/*: any*/),
                (v21/*: any*/),
                (v22/*: any*/),
                (v17/*: any*/)
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();

(node as any).hash = "2399141ecd4a8f97f8c92cb8bb2f639d";

export default node;
