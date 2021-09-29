import * as React from "react";

interface HelloWorldProps {}

const HelloWorld: React.FC<HelloWorldProps> = ({}) => {
	React.useEffect(() => {
		console.log(`hello world`);
	}, []);

	return <article>HELLO WORLD</article>;
};

export { HelloWorld };
