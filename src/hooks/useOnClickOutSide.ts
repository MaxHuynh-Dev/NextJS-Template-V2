import type React from "react";
import { useEffect } from "react";

const useOnClickOutside = (
	ref: React.RefObject<HTMLElement>,
	callBack: () => void,
): void => {
	useEffect(() => {
		const listener = (event: MouseEvent | TouchEvent): void => {
			if (!ref.current || ref.current.contains(event.target as Node)) {
				return;
			}
			callBack();
		};
		document.addEventListener("mousedown", listener);
		document.addEventListener("touchstart", listener);

		return () => {
			document.removeEventListener("mousedown", listener);
			document.removeEventListener("touchstart", listener);
		};
	}, [ref, callBack]);
};

export default useOnClickOutside;
