/**
 * Configuration options for Logaura.
 */
export interface LogauraConfig {
  /**
   * Prefix each line with a cyan timestamp.
   * @default true
   */
  includeTimestamp?: boolean;

  /**
   * Clock format for the timestamp.
   * @default '24h'
   */
  timeFormat?: '24h' | '12h';
}

/**
 * Patches the global console methods (console.log, console.warn, console.error)
 * to include colorized level prefixes and timestamps.
 * 
 * @param config Optional configuration settings.
 */
export function initLogaura(config?: LogauraConfig): void;
