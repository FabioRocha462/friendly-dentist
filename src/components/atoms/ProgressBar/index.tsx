import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Container } from "./styles";
import { useEffect } from "react";

interface ProgressBarProps {
  total: number;
  current: number;
}
export function ProgressBar({ total, current }: ProgressBarProps) {
  const percentage = Math.round((current / total) * 100);
  const sharedProgress = useSharedValue(percentage);

  const styleAnimated = useAnimatedStyle(() => {
    return {
      borderRadius: 8,
      width: `${sharedProgress.value}%`,
    };
  });
  useEffect(() => {
    sharedProgress.value = withTiming(percentage);
  }, [current]);
  return (
    <Container>
      <Animated.View
        style={[
          { height: 8, backgroundColor: "#4c0677", borderRadius: 8 },
          styleAnimated,
        ]}
      />
    </Container>
  );
}
