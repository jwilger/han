/**
 * Human Time Estimation Card Component
 *
 * Shows how long a human would take to perform the same work that AI completed,
 * with a speedup factor and breakdown by activity category.
 */

import type React from "react";
import { useMemo } from "react";
import { theme } from "@/components/atoms";
import { Box } from "@/components/atoms/Box.tsx";
import { HStack } from "@/components/atoms/HStack.tsx";
import { Text } from "@/components/atoms/Text.tsx";
import { VStack } from "@/components/atoms/VStack.tsx";
import { formatDuration } from "@/components/helpers/formatters.ts";

// =============================================================================
// Interfaces
// =============================================================================

interface HumanTimeBreakdown {
	readonly category: string;
	readonly humanSeconds: number;
	readonly percent: number;
}

interface ToolTimeEstimate {
	readonly toolName: string;
	readonly invocations: number;
	readonly humanSeconds: number;
}

interface HumanTimeEstimate {
	readonly totalHumanSeconds: number;
	readonly totalAiSeconds: number;
	readonly speedupFactor: number;
	readonly hoursSaved: number;
	readonly breakdown: readonly HumanTimeBreakdown[];
	readonly toolBreakdown: readonly ToolTimeEstimate[];
}

interface HumanTimeCardProps {
	humanTimeEstimate: HumanTimeEstimate;
}

// =============================================================================
// Color mapping for categories
// =============================================================================

const CATEGORY_COLORS: Record<string, string> = {
	"Reading AI Output": "#3b82f6",
	"Writing Code": "#10b981",
	"Thinking & Deciding": "#f59e0b",
	"Navigation & Tools": "#8b5cf6",
};

function getSpeedupDisplay(factor: number): {
	label: string;
	color: string;
	bgColor: string;
} {
	if (factor >= 100) {
		return {
			label: `${Math.round(factor)}x faster`,
			color: "#10b981",
			bgColor: "rgba(16, 185, 129, 0.15)",
		};
	}
	if (factor >= 10) {
		return {
			label: `${Math.round(factor)}x faster`,
			color: "#3b82f6",
			bgColor: "rgba(59, 130, 246, 0.15)",
		};
	}
	if (factor >= 2) {
		return {
			label: `${factor.toFixed(1)}x faster`,
			color: "#8b5cf6",
			bgColor: "rgba(139, 92, 246, 0.15)",
		};
	}
	return {
		label: `${factor.toFixed(1)}x faster`,
		color: "#f59e0b",
		bgColor: "rgba(245, 158, 11, 0.15)",
	};
}

// =============================================================================
// Component
// =============================================================================

export function HumanTimeCard({
	humanTimeEstimate,
}: HumanTimeCardProps): React.ReactElement {
	const speedup = useMemo(
		() => getSpeedupDisplay(humanTimeEstimate.speedupFactor),
		[humanTimeEstimate.speedupFactor],
	);

	const maxBreakdownSecs = useMemo(
		() =>
			Math.max(
				...humanTimeEstimate.breakdown.map((b) => b.humanSeconds),
				1,
			),
		[humanTimeEstimate.breakdown],
	);

	const maxToolSecs = useMemo(
		() =>
			Math.max(
				...humanTimeEstimate.toolBreakdown.map((t) => t.humanSeconds),
				1,
			),
		[humanTimeEstimate.toolBreakdown],
	);

	if (humanTimeEstimate.totalHumanSeconds === 0) {
		return (
			<VStack gap="md" style={{ width: "100%" }}>
				<Text color="muted" size="sm">
					No data available for human time estimation.
				</Text>
			</VStack>
		);
	}

	return (
		<VStack gap="md" style={{ width: "100%" }}>
			{/* Header: speedup badge + time saved */}
			<HStack justify="space-between" align="center">
				<VStack gap="xs">
					<Text color="secondary" size="xs">
						Estimated Human Equivalent
					</Text>
					<Text weight="semibold" size="lg">
						{formatDuration(Math.round(humanTimeEstimate.totalHumanSeconds))}
					</Text>
				</VStack>
				<Box
					style={{
						paddingHorizontal: theme.spacing.md,
						paddingVertical: theme.spacing.xs,
						backgroundColor: speedup.bgColor,
						borderRadius: theme.radii.full,
					}}
				>
					<Text weight="semibold" size="sm" style={{ color: speedup.color }}>
						{speedup.label}
					</Text>
				</Box>
			</HStack>

			{/* AI time vs Human time comparison bar */}
			<VStack gap="xs" style={{ width: "100%" }}>
				<HStack justify="space-between" align="center">
					<Text color="muted" size="xs">
						AI (actual)
					</Text>
					<Text color="muted" size="xs">
						Human (estimated)
					</Text>
				</HStack>
				<Box
					style={{
						display: "flex",
						flexDirection: "row",
						height: 12,
						borderRadius: theme.radii.md,
						overflow: "hidden",
						backgroundColor: theme.colors.bg.tertiary,
						width: "100%",
					}}
				>
					{/* AI portion - tiny sliver relative to human time */}
					<Box
						style={{
							width: `${Math.max((humanTimeEstimate.totalAiSeconds / humanTimeEstimate.totalHumanSeconds) * 100, 2)}%`,
							height: "100%",
							backgroundColor: "#10b981",
						}}
					/>
					{/* Human portion - the rest */}
					<Box
						style={{
							flex: 1,
							height: "100%",
							backgroundColor: "#f59e0b",
						}}
					/>
				</Box>
				<HStack justify="space-between" align="center">
					<Text size="xs" style={{ color: "#10b981" }}>
						{formatDuration(Math.round(humanTimeEstimate.totalAiSeconds))}
					</Text>
					<Text size="xs" style={{ color: "#f59e0b" }}>
						{formatDuration(Math.round(humanTimeEstimate.totalHumanSeconds))}
					</Text>
				</HStack>
			</VStack>

			{/* Key stats */}
			<HStack gap="lg">
				<VStack gap="xs">
					<Text color="secondary" size="xs">
						Hours Saved
					</Text>
					<Text weight="semibold" size="lg">
						{humanTimeEstimate.hoursSaved.toFixed(1)}h
					</Text>
				</VStack>
				<VStack gap="xs">
					<Text color="secondary" size="xs">
						Speedup Factor
					</Text>
					<Text weight="semibold" size="lg">
						{humanTimeEstimate.speedupFactor}x
					</Text>
				</VStack>
			</HStack>

			{/* Activity category breakdown bars */}
			<VStack gap="sm" style={{ width: "100%" }}>
				<Text color="secondary" size="xs">
					Time Breakdown (Human Equivalent)
				</Text>
				{humanTimeEstimate.breakdown.map((entry) => (
					<HStack
						key={entry.category}
						gap="sm"
						align="center"
						style={{ width: "100%" }}
					>
						<Text
							size="xs"
							color="muted"
							style={{ width: 130, flexShrink: 0 }}
						>
							{entry.category}
						</Text>
						<Box
							style={{
								flex: 1,
								height: 8,
								backgroundColor: theme.colors.bg.tertiary,
								borderRadius: theme.radii.sm,
								overflow: "hidden",
							}}
						>
							<Box
								style={{
									width: `${Math.max((entry.humanSeconds / maxBreakdownSecs) * 100, entry.humanSeconds > 0 ? 2 : 0)}%`,
									height: "100%",
									backgroundColor:
										CATEGORY_COLORS[entry.category] ?? "#6b7280",
									borderRadius: theme.radii.sm,
								}}
							/>
						</Box>
						<Text
							size="xs"
							weight="semibold"
							style={{ width: 50, textAlign: "right" }}
						>
							{formatDuration(Math.round(entry.humanSeconds))}
						</Text>
					</HStack>
				))}
			</VStack>

			{/* Per-tool breakdown */}
			{humanTimeEstimate.toolBreakdown.length > 0 && (
				<VStack gap="sm" style={{ width: "100%" }}>
					<Text color="secondary" size="xs">
						Tool Navigation Overhead
					</Text>
					{humanTimeEstimate.toolBreakdown.map((tool) => (
						<HStack
							key={tool.toolName}
							gap="sm"
							align="center"
							style={{ width: "100%" }}
						>
							<Text
								size="xs"
								color="muted"
								style={{ width: 60, flexShrink: 0 }}
							>
								{tool.toolName}
							</Text>
							<Box
								style={{
									flex: 1,
									height: 6,
									backgroundColor: theme.colors.bg.tertiary,
									borderRadius: theme.radii.sm,
									overflow: "hidden",
								}}
							>
								<Box
									style={{
										width: `${Math.max((tool.humanSeconds / maxToolSecs) * 100, tool.humanSeconds > 0 ? 2 : 0)}%`,
										height: "100%",
										backgroundColor: "#6366f1",
										borderRadius: theme.radii.sm,
									}}
								/>
							</Box>
							<Text
								size="xs"
								color="muted"
								style={{ width: 80, textAlign: "right" }}
							>
								{tool.invocations}x = {formatDuration(Math.round(tool.humanSeconds))}
							</Text>
						</HStack>
					))}
				</VStack>
			)}

			{/* Callout */}
			<Box
				style={{
					padding: theme.spacing.sm,
					backgroundColor: "rgba(16, 185, 129, 0.1)",
					borderRadius: theme.borderRadius.md,
					borderLeftWidth: 3,
					borderLeftColor: "#10b981",
				}}
			>
				<Text size="xs" color="muted">
					Estimates based on human benchmarks: 250 WPM reading, 40 WPM typing, 30-60s per tool operation, 2min per decision point
				</Text>
			</Box>
		</VStack>
	);
}
