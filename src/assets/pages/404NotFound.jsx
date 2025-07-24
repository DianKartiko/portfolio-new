export default function PageNotFound() {
    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
            <main className="grid min-h-full place-items-center bg-(var[--color-black-haze-50]) px-6 py-24 sm:py-32 lg:px-8 z-10">
                <div className="text-center">
                    <p className="text-base font-semibold text-black">404</p>
                    <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
                        Page not found
                    </h1>
                    <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                        Sorry, we couldn’t find the page you’re looking for.
                    </p>
                </div>
            </main>
        </>
    );
}
