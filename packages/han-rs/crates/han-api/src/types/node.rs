//! Relay Node interface for global ID lookups.

use crate::types::config_dir::ConfigDir;
use crate::types::hook_execution::HookExecution;
use crate::types::native_task::NativeTask;
use crate::types::project::Project;
use crate::types::repo::Repo;
use crate::types::sessions::SessionData;
use async_graphql::*;

/// Relay Node interface - any type with a globally unique ID.
#[derive(Debug, Clone, Interface)]
#[graphql(field(name = "id", ty = "ID"))]
pub enum Node {
    Session(SessionData),
    Repo(Repo),
    Project(Project),
    ConfigDir(ConfigDir),
    NativeTask(NativeTask),
    HookExecution(HookExecution),
}
