# React-ContextAPI

## **1. createContext**: Context 객체를 만듬.

📎 _MyContext.tsx_

```tsx
import { createContext } from 'react';

const MyContext = createContext<Type>(defaultValue);
```

`Type:` Context 에서 관리할 값의 타입을 설정함. </br>
`defaultValue:` Provider를 사용하지 않을 떄 값을 설정함.

</br>

## **2. Provider**: value를 받아서 하위 컴포넌트에게 전달해줌.

📎 _MyContext.tsx_

```tsx
function MyContextProvider({ children }: { children: React.ReactNode }): JSX.Element {
    return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}
```

`cildren:` Context를 구독할 컴포넌트 <br>
Provider 하위에서 Context를 구독하는 모든 컴포넌트는 value가 바뀔 때마다 다시 렌더링함.

</br>

## **3. Context 사용**

📎 _MyComponent.tsx_

```tsx
import React, { useContext } from 'react';
import { MyContext } from './contexts';

function MyComponent() {
    /* Provider에 전달한 value 값 */
    const something = useContext(MyContext);

    /* MyComponent의 타입이 undefined 일 수 있기 때문에 검사 */
    if (!something) return null;

    return <div>{something}</div>;
}
```

Context를 구독하는 컴포넌트에서 useContext를 이용하여 value를 사용할 수 있음. <br>
하지만, Context를 사용하는 경우 매번 검사를 해야하므로 Hook을 만들어 사용하는 것이 편함.

<br>

## **4.커스텀 Hooks**

📎 _MyContext.tsx_

```tsx
import { useContext } from 'react';

// ...생략

function useMyContext() {
    const state = useContext(MyContext);
    if (!state) throw new Error('Provider not found!');
    return state;
}
```

📎 _MyComponent.tsx_

```tsx
import React from 'react';
import { useMyContext } from './contexts/MyContext';

function MyComponent() {
    /* 유효성 검사를 hooks를 만들 때 이미 하였으로 생략 */
    const something = useMyContext();

    return <div>{something}</div>;
}
```

<br><br>

> [공식문서] https://ko.reactjs.org/docs/context.html
