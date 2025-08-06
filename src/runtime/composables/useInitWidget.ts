import { ref, onMounted } from 'vue';
import { useRuntimeConfig } from '#app';
import type { ReturnedObject } from '../types';

export default (
  defaultOptions: any,
  userOptions: any,
  widgetKey: string,
  src: string
): ReturnedObject => {
  const runtimeConfig = useRuntimeConfig().public.tradingview;

  const options = runtimeConfig?.overrideDefaults === true ? (userOptions || defaultOptions) : { ...defaultOptions, ...userOptions }

  const container = ref(`tw-${widgetKey}-container`);
  const scriptID = ref(`tw-${widgetKey}-script`);
  const tradingview = ref<HTMLDivElement>();

  const canUseDOM = () => {
    return (
      typeof window !== 'undefined' &&
      window.document &&
      window.document.createElement
    );
  };

  const getScriptElement = () => {
    return document.getElementById(scriptID.value);
  };

  const scriptExists = () => {
    return getScriptElement() !== null;
  };

  const appendScript = () => {
    if (!canUseDOM()) return;
    if (scriptExists()) return;

    if (options.autosize) {
      options.width = '100%';
      options.height = '100%';
    }

    const script = document.createElement('script');
    script.id = scriptID.value;
    script.type = 'text/javascript';
    script.async = true;
    script.src = src;

    if (runtimeConfig.experimental?.anonymousCrossOrigin) {
      script.crossOrigin = 'anonymous';
    }

    script.textContent = JSON.stringify(options);
    if (tradingview.value) tradingview.value.appendChild(script);
  };

  onMounted(() => {
    setTimeout(() => {
      appendScript();
    }, 300);
  });
  return { container, tradingview };
};
