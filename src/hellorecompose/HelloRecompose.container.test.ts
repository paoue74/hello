import { containerLifecycle, ContainerProps, handlers } from './HelloRecompose.container';


describe('HelloRecompose.container', () => {
  describe('Lifecycle', () => {
    const defaultProps: ContainerProps = {
      changeMsg: jest.fn(),
      initHelloMsg: jest.fn(),
      initHelloName: jest.fn(),
      message: 'message',
      name: 'name',
    };
    describe('componentDidMount', () => {
      test('should call initHelloName if name is undefined', () => {
        const props = {
          ...defaultProps,
          name: undefined
        };

        containerLifecycle.componentDidMount.call(
          {
            props: {
              ...props,
            }
          }
        );
        expect(props.initHelloName).toHaveBeenCalledTimes(1);
      });

      test('should call initHelloName if name is empty', () => {
        const props = {
          ...defaultProps,
          initHelloName: jest.fn(),
          name: ''
        };

        containerLifecycle.componentDidMount.call(
          {
            props: {
              ...props,
            }
          }
        );
        expect(props.initHelloName).toHaveBeenCalledTimes(1);
      });

      test('should call initHelloMsg if message is undefined', () => {
        const props = {
          ...defaultProps,
          message: undefined,
        };

        containerLifecycle.componentDidMount.call(
          {
            props: {
              ...props,
            }
          }
        );
        expect(props.initHelloMsg).toHaveBeenCalledTimes(1);
      });

      test('should call initHelloMsg if message is empty', () => {
        const props = {
          ...defaultProps,
          initHelloMsg: jest.fn(),
          message: '',
        };

        containerLifecycle.componentDidMount.call(
          {
            props: {
              ...props,
            },
          }
        );
        expect(props.initHelloMsg).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('Component Handlers', () => {
    describe('onChangeMsg', () => {
      const defaultProps: ContainerProps = {
        changeMsg: jest.fn(),
        initHelloMsg: jest.fn(),
        initHelloName: jest.fn(),
        message: 'message',
        name: 'name',
      };
      test('should call changeMsg when onChangeMsg is called', () => {
        const props = { ... defaultProps };
        handlers.onChangeMsg(props)();
        expect(props.changeMsg).toHaveBeenCalledTimes(1);
      });
    });
  });
});