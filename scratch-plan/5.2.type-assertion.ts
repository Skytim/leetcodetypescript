module TypeAssertion {
    function getLength1(something: string | number): number {
        return something.length;
    }

    function getLength2(something: string | number): number {
        if (something.length) {
            return something.length;
        } else {
            return something.toString().length;
        }
    }

    function getLength3(something: string | number): number {
        /// 轉型
        if ((<string>something).length) {
            return (<string>something).length;
        } else {
            return something.toString().length;
        }
    }

    function toBoolean(something: string | number): boolean {
        /// 轉型
        return <boolean>something;
    }
}
