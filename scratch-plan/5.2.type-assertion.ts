module TypeAssertion {
    function getLength1(something: string | number): string | number {
        return something;
    }

    function getLength2(something: string | number): string | number {
        if (something) {
            return something;
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

    function toBoolean(something: string | number): string | number {
        /// 轉型
        return something;
    }
}
