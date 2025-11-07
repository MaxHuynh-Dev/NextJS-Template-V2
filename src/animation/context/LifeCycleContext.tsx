"use client";

import { PageStatus } from "@Constants/animations";
import { signal } from "@preact/signals-react";
import type React from "react";
import { createContext, useContext } from "react";

type LifeCycleContextReturn = {
	pageStatus: typeof pageStatusSignal;
	setPageStatus: (status: PageStatus) => void;
	resetPageStatus: () => void;
};

const pageStatusSignal = signal<PageStatus>(PageStatus.IDLE);

const LifeCycleContext = createContext<LifeCycleContextReturn | undefined>(
	undefined,
);

export type LifeCycleProviderProp = {
	children: React.ReactNode;
};

export function LifeCycleProvider({
	children,
}: LifeCycleProviderProp): React.ReactElement {
	const setPageStatus = (status: PageStatus): void => {
		pageStatusSignal.value = status;
	};

	const resetPageStatus = (): void => {
		pageStatusSignal.value = PageStatus.IDLE;
	};

	const value: LifeCycleContextReturn = {
		pageStatus: pageStatusSignal,
		setPageStatus,
		resetPageStatus,
	};

	return (
		<LifeCycleContext.Provider value={value}>
			{children}
		</LifeCycleContext.Provider>
	);
}

export function useLifeCycle(): LifeCycleContextReturn {
	const context = useContext(LifeCycleContext);
	if (context === undefined) {
		throw new Error("useLifeCycle must be used within a LifeCycleProvider");
	}
	return context;
}
